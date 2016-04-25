#!/usr/bin/env node --harmony

'use strict'
let program = require('commander')
let inputNumber

program
    .version('0.0.1')
    .arguments('<cmd> [env]')
    .action((cmd, env) => {
        number = cmd
        
    })
    .option('-h, --hundreds', 'convert to hundreds')
    .option('-t, --thousands', 'convert to thousands')
    .option('-m, --millions', 'convert to millions')
    .option('-b, --billions', 'convert to millions')


program.parse(process.argv)

if (typeof number === 'undefined') {
    console.log('You need a number Bro!')
    process.exit(1)
} 


console.log(`your number is ${number}`)
if (program.hundreds)
    if (program.thousands) console.log(`${cmd}`)
    if (program.millions) console.log(' - ')
    if (program.billions) console.log(' - ')

