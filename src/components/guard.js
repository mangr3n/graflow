const guard = (conds, allMatches = true) => {
  const outputs = Object.keys(conds).concat('default')
  const inputs = ['mainMap']

  let components = {}
  let connections = []

  const mainMap = component((v, next) => {
    let match = false
    for(let[name, cond] of Object.entries(conds)) {
      if(cond(v)) {
        next([name, v])
        if(!allMatches) return
        match = true
      }
    }
    if(!match) next(['default', v])
  })

  components.mainMap = mainMap

  outputs.forEach(output => {
    components[output] = component((v, next) => {
      if(v[0] === output) next(v[1])
    })
    connections.push(['mainMap', output])
  })

  return component({components, connections, inputs, outputs})
}
