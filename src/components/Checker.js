import Chain from './Chain'
import Mapper from './Mapper'
import Demuxer from './Demuxer'

const Checker = cond => Chain(
  Mapper(v => {
    if(cond(v))
      return {true: v}
    else
      return {false: v}
  })
  , Demuxer('true', 'false')
)

export default Checker
