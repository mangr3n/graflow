import {arrayToObject, applyAndEmpty,
  isFunction, isUndefined, unique} from './utils'

const componentFromFunction = func => {
  const node = toNode(func)

  return {
    send: (value = {}) => node.send(value),
    on: handler => node.on(handler),
    inputs: { default: node },
    outputs: { default: node }
  }
}

const toNode = arg => {
  if (isFunction(arg)) return node(arg)
  return arg
}

const node = onNext => {
  const queue = []
  const listeners = []

  const broadcast = (arg, value = {}) => {
    arg.forEach(l => l.addToQueue(value))
    arg.forEach(l => l.processQueue())
  }

  const next = v => broadcast(listeners, v)

  const addListener = node => listeners.push(node)
  const on = handler => addListener(toNode(handler))
  const addToQueue = v => queue.push(v)
  const processQueue = () => applyAndEmpty(queue, v => onNext(v, next))

  const send = (value = {}) => {
    addToQueue(value)
    processQueue()
  }

  return {on, send, addListener, addToQueue, processQueue}
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
  const {components, connections = [], inputs = [], outputs = []} = obj

  const inputNames = unique(inputs.concat('default'))
  const outputNames = unique(outputs.concat('default'))

  const toNodes = i => [i, node((v, next) => next(v))]
  const inNodes = arrayToObject(inputNames, toNodes)
  const outNodes = arrayToObject(outputNames, toNodes)

  components.in = { inputs: inNodes, outputs: inNodes }
  components.out = { inputs: outNodes, outputs: outNodes }

  connections.forEach(([from, to]) => {
    let outNode = selectNode(from, components, 'outputs')
    let inNode = selectNode(to, components, 'inputs')
    outNode.addListener(inNode)
  })

  const on = (...args) => {
    const [handler, name = 'default'] = args.splice(0, 2).reverse()
    outNodes[name].on(handler)
  }

  const send = (...args) => {
    const [value = {}, name = 'default'] = args.splice(0, 2).reverse()
    inNodes[name].send(value)
  }

  return {send, on, inputs: inNodes, outputs: outNodes}
}

const Component = arg => {
  if (isFunction(arg)) return componentFromFunction(arg)
  return componentFromObject(arg)
}

export default Component
