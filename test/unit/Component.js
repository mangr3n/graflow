import Component from '../../src/graflow'
import {assert} from 'chai'

const GoodComponent = () => Component({
  components: {
    foo: Component((v, next) => next(v * 2))
  },
  connections: [
    ['in', 'foo'],
    ['foo', 'out']
  ]
})

describe('Component', () => {
  it('should return a component that throws an error if connections are incorrect', () => {
    // Note that there is a typo: it's foo, not fo!
    const Comp = () => Component({
      components: { foo: Component((v, next) => next(v * 2)) },
      connections: [
        ['in', 'foo'],
        ['fo', 'out']
      ]
    })

    expect(Comp).to.throw('fo component not found!')
  })
  it('should return an id from on', () => {
    const listener = spy()
    const myComp = GoodComponent()

    const listenerId = myComp.on(listener)

    assert.isNumber(listenerId)
  })
  it('should call the listener when registered', () => {
    const listener = spy()
    const comp = GoodComponent()

    comp.on(listener)

    comp.send(1)

    expect(listener).to.have.been.calledOnce
  })
  it('should stop calling the listener when removed', () => {
    const listener = spy()
    const comp = GoodComponent()

    const listenerId = comp.on(listener)
    comp.send(1)
    expect(listener).to.have.been.calledOnce

    comp.off(listenerId)
    comp.send(2)
    expect(listener).to.have.been.calledOnce
  })
})
