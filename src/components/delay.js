import component from '../component'

const delay = ms => component((v, next) => {
  setTimeout(() => next(v), ms)
})

export default delay
