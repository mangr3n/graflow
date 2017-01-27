import component from '../component'

const debug = (msg, log = console.log) => component((v, next) => {
  log(msg, v)
  next(v)
})

export default debug
