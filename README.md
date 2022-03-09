oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g luminousforts-cli
$ luminousforts-cli COMMAND
running command...
$ luminousforts-cli (--version)
luminousforts-cli/0.0.0 linux-x64 node-v14.19.0
$ luminousforts-cli --help [COMMAND]
USAGE
  $ luminousforts-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`luminousforts-cli hello PERSON`](#luminousforts-cli-hello-person)
* [`luminousforts-cli hello world`](#luminousforts-cli-hello-world)
* [`luminousforts-cli help [COMMAND]`](#luminousforts-cli-help-command)
* [`luminousforts-cli plugins`](#luminousforts-cli-plugins)
* [`luminousforts-cli plugins:inspect PLUGIN...`](#luminousforts-cli-pluginsinspect-plugin)
* [`luminousforts-cli plugins:install PLUGIN...`](#luminousforts-cli-pluginsinstall-plugin)
* [`luminousforts-cli plugins:link PLUGIN`](#luminousforts-cli-pluginslink-plugin)
* [`luminousforts-cli plugins:uninstall PLUGIN...`](#luminousforts-cli-pluginsuninstall-plugin)
* [`luminousforts-cli plugins update`](#luminousforts-cli-plugins-update)

## `luminousforts-cli hello PERSON`

Say hello

```
USAGE
  $ luminousforts-cli hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/hekar/luminousforts-cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `luminousforts-cli hello world`

Say hello world

```
USAGE
  $ luminousforts-cli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `luminousforts-cli help [COMMAND]`

Display help for luminousforts-cli.

```
USAGE
  $ luminousforts-cli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for luminousforts-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `luminousforts-cli plugins`

List installed plugins.

```
USAGE
  $ luminousforts-cli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ luminousforts-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `luminousforts-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ luminousforts-cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ luminousforts-cli plugins:inspect myplugin
```

## `luminousforts-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ luminousforts-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ luminousforts-cli plugins add

EXAMPLES
  $ luminousforts-cli plugins:install myplugin 

  $ luminousforts-cli plugins:install https://github.com/someuser/someplugin

  $ luminousforts-cli plugins:install someuser/someplugin
```

## `luminousforts-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ luminousforts-cli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ luminousforts-cli plugins:link myplugin
```

## `luminousforts-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ luminousforts-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ luminousforts-cli plugins unlink
  $ luminousforts-cli plugins remove
```

## `luminousforts-cli plugins update`

Update installed plugins.

```
USAGE
  $ luminousforts-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
