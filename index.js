#!/usr/bin/env node --harmony

'use strict'
let program = require('commander')

program
    .version('0.0.1')
    .option('-h, --hundreds', 'convert to hundreds')
    .option('-t, --thousands', 'convert to thousands')
    .option('-m, --millions', 'convert to millions')
    .option('-b, --billions', 'convert to millions')
    .parse(process.argv)

console.log('your number is ')
if (program.hundreds)
    if (program.thousands) console.log(' - ')
    if (program.millions) console.log(' - ')
    if (program.billions) console.log(' - ')

