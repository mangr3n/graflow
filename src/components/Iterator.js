import Component from '../Component'

const Iterator = (iterable, {cyclic = false} = {}) => {
  let iterator = iterable[Symbol.iterator]()

  return Component((v, next) => {
    var {value, done} = iterator.next()
    if (done && cyclic) {
      iterator = iterable[Symbol.iterator]()
      ;({value, done} = iterator.next())
    }

    if (!done) next(value)
  })
}

export default Iterator
