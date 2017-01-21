import component from '../component'

const chain = (...args) => {
  const lastIndex = args.length - 1
  const [first, last] = [args[0], args[lastIndex]]

  const components = args.reduce((obj, v, i) => ({...obj, [`c${i}`]: v}), {})

  const inputs  = Object.keys(first.inputs)
  const outputs = Object.keys(last.outputs)

  const connections = [...Array(lastIndex).keys()]
    .map(i => [`c${i}`, `c${i+1}`])
    .concat(inputs.map(input => [`in.${input}`, `c0.${input}`]))
    .concat(outputs.map(output => [`c${lastIndex}.${output}`, `out.${output}`]))

  return component({components, connections, inputs, outputs})
}

export default chain
