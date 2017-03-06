import Chain from './Chain'
import Mapper from './Mapper'
import Serializer from './Serializer'
import {toArray} from '../utils'

const ArraySerializer = () => Chain(Mapper(toArray), Serializer())

export default ArraySerializer
