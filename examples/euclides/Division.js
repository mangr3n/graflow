import {Component} from '../../dist/graflow'

const Division = () => Component(({dividend, divisor}, next) => next({
  dividend,
  divisor,
  quotient: Math.floor(dividend / divisor),
  remainder: dividend % divisor
}))

export default Division
