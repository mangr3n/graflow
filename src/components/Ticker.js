import Component from '../Component'

const Ticker = (ms, value = {}) => Component((v, next) => {
  setInterval(() => next(value), ms)
})

export default Ticker
