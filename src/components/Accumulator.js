import Component from '../Component'

const Accumulator = (initial = {}) => {
  let obj = initial

  return Component((v, next) => {
    if (typeof v !== 'object') return
    Object.entries(v).forEach(([k, v]) => { obj[k] = v })
    next(obj)
  })
}

export default Accumulator
