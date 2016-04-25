#!/usr/bin/env node --harmony

'use strict'
let program = require('commander')
let inputNumber

program
    .version('0.0.1')
    .arguments('<cmd> [env]')
    .action((cmd, env) => {
        console.log(typeof cmd)
        if (typeof cmd === 'string') {
            inputNumber = new Number(cmd)
            console.log(inputNumber)
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

if (program.thousands) console.log(`${thousands(inputNumber)} thousands`)
if (program.millions) console.log(`${millions(inputNumber)} millions`)
if (program.billions) console.log(`${billions(inputNumber)} billions`)
if (program.trillions) console.log(`${trillions(inputNumber)} trillions`)



function hundreds (inputNumber) {
    let hundNum = (inputNumber / 100).toFixed(2)
    return hundNum
}

function thousands (inputNumber) {
    let thouNum = (inputNumber / 1000).toFixed(3)
    return thouNum
}

function millions (inputNumber) {
    let millNum = (inputNumber / 1000000).toFixed(6)
    console.log(millNum)
    return millNum
}

function billions (inputNumber) {
    let billNum = (inputNumber / 1000000000).toFixed(9)
    console.log(billNum)
    return billNum
}

function trillions (inputNumber) {
    let trillNum = (inputNumber / 1000000000000).toFixed(12)
    return trillNum
}

function quadrillion (inputNumber) {
    let quadNum = (inputNumber / 1000000000000000).toFixed(15)
}

