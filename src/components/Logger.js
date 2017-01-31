import Component from '../Component'

const Logger = (log = console.log) => Component(v => log(v))

export default Logger
