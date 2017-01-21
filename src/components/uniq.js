import component from '../component'

const uniq = initialValue => {
  let lastValue = initialValue
  return component((v, next) => {
    if(v !== lastValue) {
      lastValue = v
      next(v)
    }
  })
}

export default uniq
