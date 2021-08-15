'use strict'

const Z = require ('sanctuary-type-classes')
const S = require ('sanctuary')

/*--------------- General functions */
const trace = msg => x => (console.log (msg, x), x);

const isTypeClass = x => x['@@type'] === 'sanctuary-type-classes/TypeClass@1';

const sillyHead = ([name]) => name;

const sillyLength = s => s.length;



/*--------------- Model */

const adts = [
  ['Pair'  , S.Pair ('') ('')],
  ['Maybe' , S.Just ('')],
  ['Either', S.Right ('')],
];

const SUPPORTED = '\u2705';
const UNSUPPORTED = '\u274C';

const typeClasses = S.keys (S.unchecked.filter (isTypeClass) (Z));

// getTypeClassSupportForAdt :: String -> Array (Array (a Adt)) -> Array (String)
const getTypeClassSupportForAdts = typeClass => S.unchecked.pipe ([
  S.unchecked.map (([_, adt]) => Z[typeClass].test (adt)),
  S.map (S.boolean (UNSUPPORTED) (SUPPORTED)),
  S.prepend (typeClass)
]);

// typeClassTests :: Array (Adt -> Array (String))
const typeClassTests = S.map (getTypeClassSupportForAdts) (typeClasses);


// Unused
const getAdtTypeClassSupport = adt => S.pipe ([
  S.map (typeClass => Z[typeClass].test (adt)),
  S.map (S.boolean (UNSUPPORTED) (SUPPORTED)),
]);



/*--------------- View */
const pipeJoin = S.joinWith (' | ');

const header = S.compose (pipeJoin) (S.unchecked.map (sillyHead));

const headerAlignment = S.unchecked.pipe ([
  S.unchecked.map (S.compose (sillyLength) (sillyHead)),
  S.map (n => '-'.repeat (n)),
  pipeJoin
]);

const padEnd = n => s => s.padEnd (n);

const row = padding =>
  S.compose
    (S.map (pipeJoin))
    (S.map (S.zipWith (padEnd) (padding)));

const view = adts => typeClassTests =>
`
|  Type Class   | ${header (adts)} |
| ------------  | ${headerAlignment (adts)} |
${S.joinWith ('\n')
             (S.map (r => `| ${r} |`)
                    (row ([13, 3, 4, 5]) (S.map (test => test (adts))
                                                (typeClassTests))))}
`;

/*--------------- Impure */
console.log (view (adts) (typeClassTests));
