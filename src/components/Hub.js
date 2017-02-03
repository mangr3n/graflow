import Component from '../Component'
import Mapper from './Mapper'

const Hub = (...inputs) => {
  let components = {}
  let connections = []

  inputs.forEach(i => {
    components[i] = Mapper(v => ({[i]: v}))
    connections.push([`in.${i}`, i], [i, 'out'])
  })

  return Component({components, connections, inputs})
}

export default Hub
