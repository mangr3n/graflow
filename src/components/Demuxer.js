import Component from '../Component'
import {flatten} from '../utils'

const Demuxer = (...outputs) => Component({
  components: outputs.reduce((acc, output) => {
    acc[output] = Component((v, next) => {
      if (v[output] !== undefined) next(v[output])
    })
    return acc
  }, {}),
  outputs,
  connections: flatten(outputs.map(out => [
      ['in', out],
      [out, `out.${out}`]
  ])).concat([['in', 'out']])
})

export default Demuxer
