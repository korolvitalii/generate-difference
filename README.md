### Hexlet tests and linter status:
[![Actions Status](https://github.com/korolvitalii/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/korolvitalii/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/13ce53b779225a624273/maintainability)](https://codeclimate.com/github/korolvitalii/frontend-project-lvl2/maintainability)
![NodeCI](https://github.com/korolvitalii/frontend-project-lvl2/workflows/NodeCI/badge.svg)
[![Test Coverage](https://api.codeclimate.com/v1/badges/13ce53b779225a624273/test_coverage)](https://codeclimate.com/github/korolvitalii/frontend-project-lvl2/test_coverage)
[![asciicast](https://asciinema.org/a/hG7cdJWmlruEHUVTs1fNb3ys8.svg)](https://asciinema.org/a/hG7cdJWmlruEHUVTs1fNb3ys8)
[![asciicast](https://asciinema.org/a/H7PUW7ds2yDAdgGvkY6WImsni.svg)](https://asciinema.org/a/H7PUW7ds2yDAdgGvkY6WImsni)
[![asciicast](https://asciinema.org/a/O4GDR8mu6chFna1J0CR9r0v3T.svg)](https://asciinema.org/a/O4GDR8mu6chFna1J0CR9r0v3T)
# Gendiff

This utility is made to compare two files and print the difference between them. You can use it as a library in your JavaScript code as well.

JSON, YAML and INI files are supported.

*Note*: you can compare files with different extensions, e.g. you can compare ``before.yml`` and ``after.json``.

## Setup

### As a utility

Clone this repository and run these commands in it:

```sh
npm install
npm link
```

After that, you will be able to use the utility. For help use:

```sh
gendiff -h
```
### As a library

Firstly, install the library as a dependency in your project:

```sh
npm install VilerIT/gendiff
```

Then, import it into your source code:

```js
import genDiff from 'gendiff';
```

or

```js
const genDiff = require('gendiff');
```

## Formats

Available formats - stylish, plain, json.

Stylish is used by default, but if you want to change it, run:

```sh
gendiff [filepath1] [filepath2] -f <your format here>
```

or, if you use this project as a library, run genDiff with following parameters:

```js
genDiff('[filepath1]', '[filepath2]', '<your format here>');
```
