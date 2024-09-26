import axios from 'axios'
import { useZimaAuth } from './zimaAuth'

const zimaAuthAxios = axios.create()
useZimaAuth(zimaAuthAxios)

export default zimaAuthAxios
