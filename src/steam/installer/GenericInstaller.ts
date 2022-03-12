/* eslint-disable no-await-in-loop */
import {exec} from 'node:child_process'
import {Installer} from './Installer'
import {InstallerParams} from './types'
import * as prompts from 'prompts'

export class GenericInstaller implements Installer {
  async install(params: InstallerParams): Promise<void> {
    let failedToInstall = false
    do {
      console.log(`starting... ${params.title}`)
      console.log(`Please install the ${params.title} if it is not installed`)
      const [stdout, stderr] = await new Promise(resolve => {
        const url = `steam://rungameid/${params.steamAppId}`
        exec(`steam ${url}`, {}, (stdout, stderr) => {
          resolve([stdout, stderr])
        })
      })

      console.error(stderr)
      console.log(stdout)
      const result = await prompts({
        name: 'sourceSdkInstalled',
        message: `Did ${params.title} install and create files?`,
        type: 'list',
        choices: [{
          title: 'yes',
          value: true,
        }, {
          title: 'no',
          value: false,
        }],
      })

      failedToInstall = !result.sourceSdkInstalled
    } while (failedToInstall)
  }
}
