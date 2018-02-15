import {
  arrayToObject,
  applyAndEmpty,
  isFunction,
  isUndefined,
  unique
} from './utils'

let _componentId = 0

const nextId = () => _componentId++

const componentFromFunction = (func, name = '') => {
  const node = toNode(func)

  return {
    send: (value = {}) => node.send(value),
    on: handler => node.on(handler),
    off: id => node.off(id),
    inputs: {
      default: node
    },
    outputs: {
      default: node
    },
    id: node.id,
    name
  }
}

const toNode = arg => {
  if (isFunction(arg)) return node(arg)
  return arg
}

const node = onNext => {
  const queue = []
  const listeners = {}

  const broadcast = (arg, value = {}) => {
    arg.forEach(l => l.addToQueue(value))
    arg.forEach(l => l.processQueue())
  }

  const next = v => broadcast(Object.values(listeners), v)

  const addListener = node => {
    listeners[node.id] = node
    return node.id
  }
  const removeListener = id => {
    delete listeners[id]
  }
  const on = handler => addListener(toNode(v => handler(v)))
  const addToQueue = v => queue.push(v)
  const processQueue = () => applyAndEmpty(queue, v => onNext(v, next))
  const off = id => removeListener(id)

  const send = (value = {}) => {
    addToQueue(value)
    processQueue()
  }

  return {
    on,
    off,
    send,
    addListener,
    addToQueue,
    processQueue,
    id: nextId()
  }
}

const selectNode = (name, components, io = 'inputs') => {
  const direction = io === 'inputs' ? 'inputs' : 'outputs'
  let [componentName, nodeName = 'default'] = name.split('.', 2)

  const component = components[componentName]
  if (isUndefined(component)) {
    throw new Error(`${componentName} component not found!`)
  }

  const nodes = component[direction]

  if (isUndefined(nodes) || isUndefined(nodes[nodeName])) {
    throw new Error(`${name} port not found!`)
  }

  return nodes[nodeName]
}

const componentFromObject = obj => {
  const {
    components,
    connections = [],
    inputs = [],
    outputs = [],
    name = ''
  } = obj

  const inputNames = unique(inputs.concat('default'))
  const outputNames = unique(outputs.concat('default'))

  const toNodes = i => [i, node((v, next) => next(v))]
  const inNodes = arrayToObject(inputNames, toNodes)
  const outNodes = arrayToObject(outputNames, toNodes)

  components.in = {
    inputs: inNodes,
    outputs: inNodes
  }
  components.out = {
    inputs: outNodes,
    outputs: outNodes
  }

  connections.forEach(([from, to]) => {
    let outNode = selectNode(from, components, 'outputs')
    let inNode = selectNode(to, components, 'inputs')
    outNode.addListener(inNode)
  })

  const on = (...args) => {
    const [handler, name = 'default'] = args.splice(0, 2).reverse()
    return outNodes[name].on(handler)
  }

  const off = (...args) => {
    const [id, name = 'default'] = args.splice(0, 2).reverse()
    return outNodes[name].off(id)
  }

  const send = (...args) => {
    const [value = {}, name = 'default'] = args.splice(0, 2).reverse()
    inNodes[name].send(value)
  }

  return {
    send,
    on,
    off,
    inputs: inNodes,
    outputs: outNodes,
    id: nextId(),
    name
  }
}

const Component = arg => {
  if (isFunction(arg)) return componentFromFunction(arg)
  return componentFromObject(arg)
}

export default Component
