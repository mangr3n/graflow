import { Memorizer } from '../../src/graflow'

describe('Memorizer', () => {
  it('should return a component that emits the input value and a memorized value', () => {
    const acc = Memorizer()
    const listener = spy()

    acc.on(listener)

    acc.send('memory', 1)

    expect(listener).to.have.not.been.called

    acc.send('value', 2)

    expect(listener).to.have.been.calledOnce
    expect(listener.getCall(0).args[0]).to.be.deep.equal({value: 2, memory: 1})

    acc.send({value: 5, memory: 9})

    expect(listener).to.have.been.calledTwice
    expect(listener.getCall(1).args[0]).to.be.deep.equal({value: 5, memory: 9})
  })
})
