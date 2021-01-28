#!/usr/bin/env node

import program from 'commander';
import start from '../index.js';

program
  // .description('Compares two configuration files and s hows a difference.')
  // .option('-V, --version', 'output the version number')
  // .helpOption('-h, --HELP', 'read more information')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const options = program.opts();
    const result = start(filepath1, filepath2, options.format);
    console.log(result);
  });

program.parse(process.argv);
