import Component from '../Component'
import Mapper from './Mapper'
import SortedDemuxer from './SortedDemuxer'

const Memorizer = () => {
  let memory

  return Component({
    inputs: ['memory', 'value'],
    components: {
      memory: Component(v => { memory = v }),
      mapper: Mapper(value => ({value, memory})),
      demuxer: SortedDemuxer('memory', 'value')
    },
    connections: [
      ['in.memory', 'memory'],
      ['in.value', 'mapper'],
      ['mapper', 'out'],
      ['in', 'demuxer'],
      ['demuxer.memory', 'memory'],
      ['demuxer.value', 'mapper']
    ]
  })
}

export default Memorizer
