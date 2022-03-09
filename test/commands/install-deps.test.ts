import {expect, test} from '@oclif/test'

describe('install-deps', () => {
  test
  .stdout()
  .command(['install-deps'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['install-deps', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
