import {Installer} from './Installer'
import {GenericInstaller} from './GenericInstaller'

export function createInstaller(): Installer {
  return new GenericInstaller()
}
