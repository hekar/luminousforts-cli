import {InstallerParams} from '.'

export interface Installer {
  install(params: InstallerParams): Promise<void>
}
