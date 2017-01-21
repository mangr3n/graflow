import component from '../component'

const filter = cond => component((v, next) => { if(cond(v)) next(v) })

export default filter
