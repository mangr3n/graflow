import Chain from './Chain'
import Mapper from './Mapper'
import Serializer from './Serializer'
import Demuxer from './Demuxer'
import {pairToObject} from '../utils'

const SortedDemuxer = (...outputs) => Chain(
  Mapper(obj => outputs.map(k => [k, obj[k]])),
  Serializer(),
  Mapper(pairToObject),
  Demuxer(...outputs)
)

export default SortedDemuxer
