import Component from '../Component'

const Debugger = ({prefix, log = console.log} = {}) => Component((v, next) => {
  if (prefix === undefined) {
    log(v)
  } else {
    log(prefix, v)
  }
  next(v)
})

export default Debugger
