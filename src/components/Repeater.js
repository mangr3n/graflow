import Component from '../Component'

const Repeater = (times = 1) => Component((v, next) => {
  for (let i = 1; i <= times; i++) next(v)
})

export default Repeater
