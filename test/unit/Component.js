import Component from '../../src/graflow'

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

    expect(Comp).to.throw('output stream fo not found!')
  })
})
