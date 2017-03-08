import {Component, Mapper, Checker} from '../../dist/graflow'
import Division from './Division'

const Euclides = () => Component({
  components: {
    division: Division(),
    inMapper: Mapper(({a, b}) => ({dividend: a, divisor: b})),
    remainderIsZero: Checker(({remainder}) => remainder === 0),
    outMapper: Mapper(({divisor}) => divisor),
    newDivisionMapper: Mapper(({divisor, remainder}) =>
      ({dividend: divisor, divisor: remainder}))
  },
  connections: [
    ['in', 'inMapper'],
    ['inMapper', 'division'],
    ['division', 'remainderIsZero'],
    ['remainderIsZero.true', 'outMapper'],
    ['outMapper', 'out'],
    ['remainderIsZero.false', 'newDivisionMapper'],
    ['newDivisionMapper', 'division']
  ]
})

export default Euclides
