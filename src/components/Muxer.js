import Chain from './Chain'
import Hub from './Hub'
import Accumulator from './Accumulator'
import Filter from './Filter'

const Muxer = (...inputs) => Chain(
  Hub(...inputs),
  Accumulator(),
  Filter(v => inputs.every(i => v[i] !== undefined))
)

export default Muxer
