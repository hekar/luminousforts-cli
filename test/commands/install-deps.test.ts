import {expect, test} from '@oclif/test'

describe('install-deps', () => {
  test
  .skip()
  .stdout()
  .command(['install-deps'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .skip()
  .stdout()
  .command(['install-deps', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
