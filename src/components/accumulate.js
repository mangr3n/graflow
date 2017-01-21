import component from '../component'

const accumulate = (initial={}) => {
  let obj = initial
  return component((v, next) => {
    if(typeof v !== 'object') return
    Object.entries(v).forEach(([k,v]) => obj[k] = v)
    next(obj)
  })
}

export default accumulate
