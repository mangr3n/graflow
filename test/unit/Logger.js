import { Logger } from '../../src/graflow'

describe('Logger', () => {
  it('should return a component that takes an input value and emit it and pass it to the log function', () => {
    const listenerLog = spy()
    const logger = Logger({prefix: 'logger', log: listenerLog})

    const listenerOutput = spy()

    logger.out.default.on(listenerOutput)
    logger.in.default.send(2)

    expect(listenerLog).to.have.been.calledOnce
    expect(listenerLog.getCall(0).args[0]).to.be.equal('logger')
    expect(listenerLog.getCall(0).args[1]).to.be.equal(2)

    expect(listenerOutput).to.have.been.calledOnce
    expect(listenerOutput.getCall(0).args[0]).to.be.equal(2)
  })
})
