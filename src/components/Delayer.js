import Component from '../Component'

const Delayer = ms => Component((v, next) => {
  setTimeout(() => next(v), ms)
})

export default Delayer
