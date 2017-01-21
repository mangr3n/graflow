import chain from './chain'
import map from './map'
import demux from './demux'

const check = cond => chain(
  map(v => {
    if(cond(v))
      return {true: v}
    else
      return {false: v}
  })
  , demux('true', 'false')
)

export default check
