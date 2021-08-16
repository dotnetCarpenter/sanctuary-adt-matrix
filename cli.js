#!/usr/bin/env node

'use strict'

const { adts, typeClassTests } = require ('./matrix.js');
const cliView                  = require ('./views/cli.js');

/*--------------- Impure */
console.log (cliView (adts) (typeClassTests));