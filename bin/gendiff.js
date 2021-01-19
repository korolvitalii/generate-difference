#!/usr/bin/env node

import program from 'commander';

program
  .description('Compares two configuration files and s hows a difference.')
  .option('-V, --version', 'output the version number')
  .helpOption('-h, --HELP', 'read more information')
  .option('-f, --format [type]', 'output format')

program.parse(process.argv);
