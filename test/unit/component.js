import component from '../../src/graflow'

describe('component', () => {
  it('should throw an error if connections are incorrect', () => {
    // Note that there is a typo: it's foo, not fo!
    const Comp = () => component({
      components: { foo: component((v, next) => next(v * 2)) },
      connections: [
        ['in', 'foo'],
        ['fo', 'out']
      ]
    })

    expect(Comp).to.throw('output stream fo not found!')
  })
})
