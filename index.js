#!/usr/bin/env node --harmony

'use strict'
let program = require('commander')
let inputNumber

program
    .version('0.0.1')
    .arguments('<cmd> [env]')
    .action((cmd, env) => {
        inputNumber = cmd
    })
    .option('-H, --hundreds', 'convert to hundreds')
    .option('-T, --thousands', 'convert to thousands')
    .option('-M, --millions', 'convert to millions')
    .option('-B, --billions', 'convert to billions')
    .option('-T, --trillions', 'convert to tillions')
    .option('-Q, --quadrillions', 'convert to quadrillions')
    .option('-Qu, --quintillions', 'convert to quintillions')
    .option('-S, --sextillion', 'convert to sextillion')
    .option('-Se, --septillion', 'convert to septillion')


program.parse(process.argv)

if (typeof inputNumber === 'undefined') {
    console.log('You need a number Bro!')
    process.exit(1)
} 


if (program.hundreds) {
    console.log(`${hundreds(inputNumber)} hundreds`)
}

if (program.thousands) console.log(`${inputNumber} * .01`)
if (program.millions) console.log(' - ')
if (program.billions) console.log(`${billions(inputNumber)} billions`)
if (program.trillions) console.log(`${trillions(inputNumber)} trillions`)



function hundreds (inputNumber) {
    return inputNumber / 100
}

function thousands (inputNumber) {
    return inputNumber / 1000
}

function millions (inputNumber) {
    return inputNumber / 1000000
}

function billions (inputNumber) {
    return inputNumber / 1000000000
}

function trillions (inputNumber) {
    return inputNumber / 1000000000000
}

