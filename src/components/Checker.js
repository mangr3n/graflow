import Chain from './Chain'
import Mapper from './Mapper'
import Demuxer from './Demuxer'

const Checker = cond => Chain(
  Mapper(v => cond(v) ? {true: v} : {false: v}),
  Demuxer('true', 'false')
)

export default Checker
