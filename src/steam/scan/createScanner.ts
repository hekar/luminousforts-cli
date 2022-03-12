import {Scanner} from './scanner'
import {DefaultScanner} from './DefaultScanner'

export function createScanner(): Scanner {
  return new DefaultScanner()
}
