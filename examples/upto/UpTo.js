import {Component, Mapper, Filter} from '../../dist/graflow'

const UpTo = limit => Component({
  components: {
    inc: Mapper(v => v + 1),
    limit: Filter(v => v <= limit)
  },
  connections: [
    ['in', 'inc'],
    ['inc', 'limit'],
    ['limit', 'out'],
    ['limit', 'inc']
  ]
})

export default UpTo
