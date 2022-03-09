/* eslint-disable no-await-in-loop */
import {Command} from '@oclif/core'
import {appIds} from '../steam/app-id'
import {createInstaller} from '../steam/installer'

export default class InstallDeps extends Command {
  static description = 'describe the command here'

  static args = []

  public async run(): Promise<void> {
    await this.parse(InstallDeps)

    const installer = createInstaller();
    await installer.install({
      title: 'Source SDK',
      steamAppId: appIds.sourceSdk,
      prompt: true,
    })

    await installer.install({
      title: 'Source SDK Base 2013 Multiplayer',
      steamAppId: appIds.sourceSdkBase2013Multiplayer,
      prompt: true,
    })
  }
}
