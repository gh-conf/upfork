# upfork

![Build](https://github.com/gh-conf/upfork/actions/workflows/nodejs.yml/badge.svg)
[![Github Repo Size](https://img.shields.io/github/repo-size/gh-conf/upfork.svg)](https://github.com/gh-conf/upfork)
[![LICENSE](https://img.shields.io/npm/l/@gh-conf/upfork.svg)](https://github.com/gh-conf/upfork/blob/master/LICENSE)
[![NPM Downloads](https://img.shields.io/npm/dt/@gh-conf/upfork.svg)](https://www.npmjs.com/package/@gh-conf/upfork)
[![NPM Version](https://img.shields.io/npm/v/@gh-conf/upfork.svg)](https://www.npmjs.com/package/@gh-conf/upfork)
[![Contributors](https://img.shields.io/github/contributors/gh-conf/upfork.svg)](https://github.com/gh-conf/upfork/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/gh-conf/upfork.svg)](https://github.com/gh-conf/upfork/commits/master)


CLI tool to sync master branch of forked repository with remote original repostory

## Install

```
npm install upfork -g
```

## Usage

- Run the command inside fork repo directory

```bash
$ upfork
```

- On successful sync you will see following messages on the console

```
✔ Branch synced.

Run below command to update your forked repository

///////  git push origin master  ///////
```

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/gh-conf/upfork/issues/new).

Read our contributing [guide](CONTRIBUTING.md) to get started with contributing to the codebase.


## Related

- [upstream-core](https://github.com/gh-conf/upstream-core)
- [upstreamit](https://github.com/gh-conf/upstreamit)

