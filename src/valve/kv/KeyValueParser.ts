import {KeyValueNode} from './KeyValueNode'
import {KeyValueParserState} from './KeyValueParserState'
import {KeyValues} from './KeyValues'

export class KeyValueParser {
  private readonly root: KeyValueNode;
  constructor() {
    this.root = new KeyValueNode(undefined, '')
  }

  parse(content: string): KeyValues {
    this.parseAst(content)
    return new KeyValues(this.root)
  }

  private parseAst(content: string): void {
    const lines = content.split('\n')
    let state: KeyValueParserState = 'root'
    let cur = this.root
    for (const line of lines) {
      state = this.conditionallyModifyState(line) ?? state
      if (state === 'tag_name') {
        const parent = cur
        // The root node has no tag or properties ignore it.
        const tagName = line.trim().replace(/^"/, '').replace(/"$/, '')
        if (tagName) {
          cur = new KeyValueNode(parent, tagName)
          parent.add(cur)
        }
      } else if (state === 'end_tag') {
        if (cur.parent !== undefined) {
          cur = cur.parent
        }
      } else if (state === 'property') {
        const match = /\s*"(.*?)"\s+"(.*?)"\s*$/.exec(line)
        if (match) {
          const [, key, value] = match
          cur.properties[key] = value
        }
      }
    }
  }

  private conditionallyModifyState(line: string): KeyValueParserState | undefined {
    if (/\s*{\s*/.test(line)) {
      return 'start_tag'
    } else if (/\s*}\s*/.test(line)) {
      return 'end_tag'
    } else if (/\s*"(.*?)"\s+"(.*?)"\s*$/.test(line)) {
      return 'property'
    } else if (/\s*\w*$/.test(line) && line.includes('"')) {
      return 'tag_name'
    } else {
      return undefined
    }
  }
}
