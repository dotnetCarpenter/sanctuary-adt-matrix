#!/usr/bin/env node

'use strict'

// HACK: speed up by removing type checking
process.env.NODE_ENV = 'production'

const { adts, typeClassTests } = require ('./matrix.js');
const cliView                  = require ('./views/cli.js');

/*--------------- Impure */
console.log (cliView (adts) (typeClassTests));