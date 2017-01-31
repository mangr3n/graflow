import Component from '../Component'

const Mapper = f => Component((v, next) => next(f(v)))

export default Mapper
