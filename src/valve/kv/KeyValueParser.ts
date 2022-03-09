import {KeyValueNode} from './KeyValueNode'
import {KeyValueParserState} from './KeyValueParserState';
import { KeyValues } from './KeyValues';

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
      switch (state) {
      case 'tag_name': {
        const parent = cur
        // The root node has no tag or properties ignore it.
        const tagName = line.trim()
        if (tagName) {
          cur = new KeyValueNode(parent, tagName)
          parent.add(cur)
        }

        break
      }

      case 'end_tag': {
        if (cur.parent !== undefined) {
          cur = cur.parent
        }

        break
      }

      case 'property': {
        const match = /\s*"(.*?)"\s+"(.*?)"\s*$/.exec(line)
        if (match) {
          const [, key, value] = match
          cur.properties[key] = value
        }

        break
      }
      // No default
      }
    }
  }

  private conditionallyModifyState(line: string): KeyValueParserState | undefined {
    if (/\s*{\s*/.test(line)) {
      return 'start_tag'
    }

    if (/\s*}\s*/.test(line)) {
      return 'end_tag'
    }

    if (/\s*\w*$/.test(line) && !line.includes('"')) {
      return 'tag_name'
    }

    if (/\s*"(.*?)"\s+"(.*?)"\s*$/.test(line)) {
      return 'property'
    }

    return undefined
  }
}
