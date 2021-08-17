'use strict'

const Z = require ('sanctuary-type-classes')
const S = require ('sanctuary')
const {Future} = require ('fluture')

/*--------------- General functions */
const trace = msg => x => (console.log (msg, x), x);

const isTypeClass = x => x['@@type'] === 'sanctuary-type-classes/TypeClass@1';



/*--------------- Model */
const adts = [
  ['Either' , S.Right ('')],
  ['Maybe'  , S.Just ('')],
  ['Pair'   , S.Pair ('') ('')],
  ['Future' , Future (reject => resolve => () => {})],
  ['Array'  , []],
  ['Boolean', true],
  ['Date'   , new Date],
  ['Map'    , new Map],
  ['Number' , 42],
  ['Object' , {}],
  ['RegExp' , /./],
  ['String' , 'String'],
];

const SUPPORTED = '\u2705';
const UNSUPPORTED = '\u274C';

const typeClasses = S.keys (S.unchecked.filter (isTypeClass) (Z));

// getTypeClassSupportForAdt :: String -> Array (Array (Any Adt)) -> Array (Array Adt -> Array String)
const getTypeClassSupportForAdts = typeClass => S.unchecked.pipe ([
  S.unchecked.map (([_, adt]) => Z[typeClass].test (adt)),
  S.map (S.boolean (UNSUPPORTED) (SUPPORTED)),
  S.prepend (typeClass)
]);

// typeClassTests :: Array (Array (String Adt) -> Array (String))
const typeClassTests = S.map (getTypeClassSupportForAdts) (typeClasses);

// Unused
const getAdtTypeClassSupport = adt => S.pipe ([
  S.map (typeClass => Z[typeClass].test (adt)),
  S.map (S.boolean (UNSUPPORTED) (SUPPORTED)),
]);

module.exports = {
  adts,
  typeClassTests,
  trace,
};
