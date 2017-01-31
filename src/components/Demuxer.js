import Component from '../Component'

const flatMap = v => [].concat.apply([], v)

const Demuxer = (...outputs) => Component({
  components: outputs.reduce((acc, output) => {
    acc[output] = Component((v, next) => {
      if(v[output] !== undefined) next(v[output])
    })
    return acc
  }, {})
  , outputs
  , connections: flatMap(outputs.map(out => [
      ['in.default', out],
      [out, `out.${out}`]
  ]))
})

export default Demuxer
