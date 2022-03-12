import {set} from 'lodash'
import {KeyValueNode} from './KeyValueNode'

export class KeyValues {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly root: KeyValueNode) {}

  toObject(): Record<string, any> {
    const acc = {}
    const q = [{n: this.root, tagPath: ''}]
    while (q.length > 0) {
      const {n, tagPath} = q.pop() ??
        {n: undefined, tagPath: ''}
      if (n) {
        const normalTagPath = `${tagPath}.`.replace(/^\./, '')
        for (const [key, value] of Object.entries(n.properties)) {
          const fullPath = normalTagPath + key
          console.log(`setting path (${fullPath})`)
          set(acc, fullPath, value)
        }

        console.log({n, children: n.children})
        for (const c of n.children) {
          q.unshift({n: c, tagPath: normalTagPath + c.tag})
        }
      }
    }

    return acc
  }
}
