import Component from '../Component'

const Counter = (initial=0) => {
  let value = initial
  return Component((v, next) => {
    value++
    next(value)
  })
}

export default Counter
