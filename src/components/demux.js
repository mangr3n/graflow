import component from '../component'

const flatMap = v => [].concat.apply([], v)

const demux = (...args) => {
  let outputs
  if(args[0] instanceof Array)
    outputs = args[0]
  else
    outputs = args

  return component({
    components: outputs.reduce((acc, output) => {
      acc[output] = component((v, next) => {
        if(v[output] !== undefined) next(v[output])
      })
      return acc
    }, {})
    , outputs
    , connections: flatMap(
      outputs.map(out => [['in.default', out], [out, 'out.' + out]])
    )
  })
}

export default demux
