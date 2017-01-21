import component from '../component'

const iterateAll = iterable => component((v, next) => {
  for(let i of iterable) next(i)
})

export default iterateAll
