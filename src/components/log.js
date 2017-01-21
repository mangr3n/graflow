import component from '../component'

const log = (print = console.log) => component(v => print(v))

export default log
