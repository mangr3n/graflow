import Component from '../Component'

const Filter = cond => Component((v, next) => {
  if(cond(v)) next(v)
})

export default Filter
