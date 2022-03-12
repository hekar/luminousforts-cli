import {resolve} from 'path'
import * as fs from 'fs'
import {KeyValueParser} from '../../../src/valve/kv/KeyValueParser'
import {expect} from '@oclif/test'

describe('KeyValues', () => {
  it('should convert GameConfig to record', async () => {
    const content = await fs.promises.readFile(resolve(__dirname, 'GameConfig.example'), 'utf8')
    const parser = new KeyValueParser()
    const parsed = parser.parse(content)
    expect(parsed.toObject()).deep.equal({}, '')
  })
})
