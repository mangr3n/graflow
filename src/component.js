const connect = (compOut, compIn, match = {default: 'default'}) => {
  Object.keys(match).forEach(outName => {
    let inName = match[outName]
    let output = compOut.outputs[outName]
    let input  = compIn.inputs[inName]

    if(output !== undefined && input !== undefined) {
      output.connect(input)
    }
  })
}

const toComponent = arg => {
  if(typeof arg === 'object') return arg
  let node = toNode(arg)
  return {
    start: (v={}) => node.received(v)
    , inputs:  { default: node }
    , outputs: { default: node }
    , in:  { default: node }
    , out: { default: node }
  }
}

const toNode = arg => {
  let result = arg
  if(typeof arg === 'function') {
    result = node(arg)
  }
  return result
}

const node = onNext => {
  const queue = []
  const listeners = []
  const next = v => {
    listeners.forEach(l => l.addToQueue(v))
    listeners.forEach(l => l.processQueue())
  }

  const obj = {
    addListener(listener) { listeners.push(toNode(listener)) }
    , on(listener) { obj.addListener(listener) }
    , connect(listener) { obj.addListener(listener) }
    , addToQueue(v) { queue.push(v) }
    , received(v={}) {
      obj.addToQueue(v)
      obj.processQueue()
    }
    , send(v={}) { obj.received(v) }
    , processQueue() {
      const values = queue.length
      for(let i=1; i<=values; i++) {
        let v = queue.shift()
        onNext(v, next)
      }
    }
  }

  return obj
}

const select = (name, components, io = 'input') => {
  const direction = io === 'input' ? 'inputs' : 'outputs'
  let [componentName, streamName] = name.split('.', 2)
  let ioStreams
  const component = components[componentName]

  if(component !== undefined) {
    ioStreams = component[direction]
    if(ioStreams !== undefined && streamName === undefined) {
      const ioNames = Object.keys(ioStreams)
      if(ioNames.length === 1) streamName = ioNames[0]
    }
  }

  if(ioStreams === undefined || ioStreams[streamName] === undefined) {
    throw `${io} stream ${name} not found!`
  }

  return ioStreams[streamName]
}

const component2 = ({components,
  connections=[], inputs=['default'], outputs = ['default']}) => {
  Object.keys(components).forEach(key => {
    components[key] = toComponent(components[key])
  })

  const inNodes = inputs.reduce((acc, i) => {
    acc[i] = node((v, next) => next(v))
    return acc
  }, {})

  const outNodes = outputs.reduce((acc, i) => {
    acc[i] = node((v, next) => next(v))
    return acc
  }, {})

  components.in = { inputs: inNodes, outputs: inNodes }
  components.out = { inputs: outNodes, outputs: outNodes }

  connections.forEach(([from, to]) => {
    let streamOut = select(from, components, 'output')
    let streamIn  = select(to, components, 'input')

    streamOut.addListener(streamIn)
  })

  const stringsToObj = (strings, components, direction) => strings.reduce((acc, name) => {
    let stream = components[name][direction].default
    acc[name] = stream
    if(strings.length == 1) {
      acc.default = stream
    }
    return acc
  }, {})

  const comp = {
    start: (initialValues = {default: {}}) => {
      if(typeof initialValues !== 'object') {
        initialValues = {default: initialValues}
      }
      for(let key in initialValues) {
        comp.inputs[key].received(initialValues[key])
      }
    }
    , inputs: inNodes
    , outputs: outNodes
    , in: inNodes
    , out: outNodes
  }

  return comp
}

const component = arg => {
  if(typeof arg === 'function')
    return toComponent(arg)
  else
    return component2(arg)
}

export default component
