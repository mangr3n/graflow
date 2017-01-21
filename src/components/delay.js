const delay = ms => component((v, next) => {
  setTimeout(() => next(v), ms)
})
