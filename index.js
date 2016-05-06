#!/usr/bin/env node --harmony

'use strict'
let program = require('commander')
let inputNumber

program
    .version('0.0.1')
    .arguments('<cmd> [env]')
    .action((cmd, env) => {
        if (typeof cmd === 'string') {
            inputNumber = new Number(cmd)
        }
    })
    .option('-H, --hundreds', 'convert to hundreds')
    .option('-T, --thousands', 'convert to thousands')
    .option('-M, --millions', 'convert to millions')
    .option('-B, --billions', 'convert to billions')
    .option('-T, --trillions', 'convert to tillions')
    .option('-Q, --quadrillions', 'convert to quadrillions')


program.parse(process.argv)

if (typeof inputNumber === 'undefined') {
    console.log('You need a number Bro!')
    process.exit(1)
} 


if (program.hundreds) {
    console.log(`${hundreds(inputNumber)} hundreds`)
}

if (program.thousands) console.log(`${convertToThousands(inputNumber)} thousands`)
if (program.millions) console.log(`${convertToMillions(inputNumber)} millions`)
if (program.billions) console.log(`${convertToBillions(inputNumber)} billions`)
if (program.trillions) console.log(`${convertToTrillions(inputNumber)} trillions`)
if (program.quadrillions) console.log(`${convertToQuadrillions(inputNumber)} quadrillions`)



function convertToHundreds (inputNumber) {
    let hundNum = (inputNumber / 100).toFixed(2)
    return hundNum
}

function convertToThousands (inputNumber) {
    let thouNum = (inputNumber / 1000).toFixed(3)
    return thouNum
}

function convertToMillions (inputNumber) {
    let millNum = (inputNumber / 1000000).toFixed(6)
    return millNum
}

function convertToBillions (inputNumber) {
    let billNum = (inputNumber / 1000000000).toFixed(9)
    return billNum
}

function convertToTrillions (inputNumber) {
    let trillNum = (inputNumber / 1000000000000).toFixed(12)
    return trillNum
}

function convertToQuadrillions (inputNumber) {
    let quadNum = (inputNumber / 1000000000000000).toFixed(15)
    return quadNum
}
