import Component from '../Component'

const Logger = ({prefix, log = console.log} = {}) => Component((v, next) => {
  if (prefix === undefined) {
    log(v)
  } else {
    log(prefix, v)
  }
  next(v)
})

export default Logger
