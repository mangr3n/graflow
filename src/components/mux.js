import component from '../component'
import map from './map'
import filter from './filter'
import accumulate from './accumulate'

const mux = (...args) => {
  let inputs
  if(args[0] instanceof Array)
    inputs = args[0]
  else
    inputs = args

  let components = {}
  let connections = []

  inputs.forEach(i => {
    components[i] = map(v => ({[i]: v}))
    connections.push(['in.' + i, i], [i, 'acc'])
  })

  components.acc = accumulate()
  components.filter = filter((v => inputs.every(i => v[i] !== undefined) ))

  connections.push(['acc', 'filter'], ['filter', 'out.default'])

  return component({components, connections, inputs})
}

export default mux
