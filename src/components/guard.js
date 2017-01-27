import component from '../component'
import chain from './chain'
import demux from './demux'

const guard = conds => chain(
  component((v, next) => {
    Object.entries(conds).forEach(([name, cond]) => {
      let others = []
      let match = false

      if(cond === 'otherwise') {
        others.push(name)
      } else if(typeof cond === 'function' && cond(v)) {
        next({[name]: v})
        match = true
      }

      if(!match) others.forEach(name => next({[name]: v}))
    })
  })
  , demux(...Object.keys(conds))
)

export default guard
