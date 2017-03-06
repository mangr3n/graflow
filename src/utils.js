const pipe = (...funcs) => funcs.reduce((f, g) => (...args) => g(f(...args)))

const isFunction = arg => typeof arg === 'function'
const isObject = arg => typeof arg === 'object'
const isUndefined = arg => arg === undefined

const pairToObject = ([key, value]) => ({[key]: value})

const pairsToObject = arr => arr.reduce(
  (obj, pair) => ({...obj, ...pairToObject(pair)}),
  {}
)

const arrayToObject = (arr, func) => pairsToObject(arr.map(func))

const applyAndEmpty = (arr, func) => {
  const values = arr.length
  for (let i = 1; i <= values; i++) func(arr.shift())
}

const flatten = v => [].concat(...v)

const unique = arg => [...new Set(arg)]

const toArray = arg => [].concat(arg)

export {pipe,
  isFunction, isObject, isUndefined,
  arrayToObject, pairToObject, pairsToObject,
  applyAndEmpty, flatten, unique, toArray}
