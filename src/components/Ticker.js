import Component from '../Component'

const Ticker = (ms, {value = {}, initialDelay = false}) => {
  return Component((v, next) => {
    if (!initialDelay) next(value)
    setInterval(() => next(value), ms)
  })
}

export default Ticker
