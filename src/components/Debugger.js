import Component from '../Component'

const Debugger = (msg, log = console.log) => Component((v, next) => {
  log(msg, v)
  next(v)
})

export default Debugger
