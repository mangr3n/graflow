import Component from '../Component'
import Mapper from './Mapper'
import Filter from './Filter'
import Accumulator from './Accumulator'

const Muxer = (...inputs) => {
  let components = {}
  let connections = []

  inputs.forEach(i => {
    components[i] = Mapper(v => ({[i]: v}))
    connections.push([`in.${i}`, i], [i, 'acc'])
  })

  components.acc = Accumulator()
  components.filter = Filter((v => inputs.every(i => v[i] !== undefined)))

  connections.push(
    ['acc', 'filter'],
    ['filter', 'out.default']
  )

  return Component({components, connections, inputs})
}

export default Muxer
