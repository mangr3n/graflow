import component from '../component'

const periodic = (ms, value={}) => component((v, next) => {
  setInterval(() => next(value), ms)
})

export default periodic
