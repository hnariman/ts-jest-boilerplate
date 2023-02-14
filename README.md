# Boilperplate for ts + jest

Initial setup for project with TS & Jest

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/hnariman/ts-jest-boilerplate/test.yml?style=plastic)

## Configuration steps

### init things

```bash

git init && yarn init && tsc --init

```

### then install babel

```bash

yarn add -D babel @babel/preset-env @babel/preset-typescript

```

### update babel.config.js

```javascript
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
};
```

### install jest & types

```bash

yarn add -D jest @types/jest

```

### init jest config

```bash

jest init

```

### create files

```bash

mkdir -p src test
touch src/index.ts test/some.test.ts

```

and can test if everything is running ok by:

```bash

yarn jest

```

## OR instead just clone this repo

```bash

git clone git@github.com:hnariman/ts-jest-boilerplate.git

```
