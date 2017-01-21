import component from '../component'

const iterateOnce = iterable => {
  const iterator = iterable[Symbol.iterator]()

  return component((v, next) => {
    const {value, done} = iterator.next()
    if(!done) next(value)
  })
}

export default iterateOnce
