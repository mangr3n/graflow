import Component from '../Component'

const Ticker = (ms, config = {}) => {
  const {
    value = {}, initialDelay = false
  } = config
  let running = false
  return Component((v, next) => {
    if (running) return
    running = true
    if (!initialDelay) next(value)
    setInterval(() => next(value), ms)
  })
}

export default Ticker