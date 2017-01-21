import component from '../component'

const repeat = (times=1) => component((v, next) => {
  for(let i=1; i<=times; i++) next(v)
})

export default repeat
