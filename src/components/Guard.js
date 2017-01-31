import Component from '../Component'
import Chain from './Chain'
import Demuxer from './Demuxer'

const Guard = conds => Chain(
  Component((v, next) => {
    Object.entries(conds).forEach(([name, cond]) => {
      let others = []
      let match = false

      if (cond === 'otherwise') {
        others.push(name)
      } else if (typeof cond === 'function' && cond(v)) {
        next({[name]: v})
        match = true
      }

      if (!match) others.forEach(name => next({[name]: v}))
    })
  })
  , Demuxer(...Object.keys(conds))
)

export default Guard
