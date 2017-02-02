import { Ticker } from '../../src/graflow'

describe('Ticker', () => {
  var clock

  before(() => { clock = sinon.useFakeTimers() })
  after(() => { clock.restore() })

  it('should return a  component that emits values or ticks periodically', () => {
    const timer = Ticker(1000, {value: 'tick', initialDelay: true})
    const listener = spy()

    timer.outputs.default.on(listener)
    timer.inputs.default.send()

    expect(listener).to.have.not.been.called

    clock.tick(1200)

    expect(listener).to.have.been.calledOnce
    expect(listener.getCall(0).args[0]).to.be.equal('tick')

    clock.tick(1200)

    expect(listener).to.have.been.calledTwice
    expect(listener.getCall(1).args[0]).to.be.equal('tick')
  })
})
