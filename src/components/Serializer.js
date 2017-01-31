import Component from '../Component'

const Serializer = () => Component((iterable, next) => {
  if (iterable[Symbol.iterator]) {
    for (let i of iterable) next(i)
  }
})

export default Serializer
