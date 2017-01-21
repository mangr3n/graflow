import component from '../component'

const map = f => component((v,next) => next(f(v)) )

export default map
