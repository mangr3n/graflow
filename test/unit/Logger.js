import { Logger } from '../../src/graflow'

describe('Logger', () => {
  it('should take an input value and pass it to the log function', () => {
    const listener = spy()
    const logger = Logger(listener)

    logger.in.default.send(2)

    expect(listener).to.have.been.calledOnce
    expect(listener.getCall(0).args[0]).to.be.equal(2)
  })
})
