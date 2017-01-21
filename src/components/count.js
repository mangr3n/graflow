import component from '../component'

const count = (initial=0) => {
  let value = initial
  return component((v, next) => {
    value++
    next(value)
  })
}

export default count
