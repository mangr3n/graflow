import Component from '../Component'

const Iterator = iterable => {
  const iterator = iterable[Symbol.iterator]()

  return Component((v, next) => {
    const {value, done} = iterator.next()
    if (!done) next(value)
  })
}

export default Iterator
