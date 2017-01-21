const periodic = (ms, value={}) => component((v, next) => {
  setInterval(() => next(value), ms)
})
