'use strict'

const S = require ('sanctuary')

/*--------------- General functions */
const sillyHead = ([name]) => name;

const sillyLength = s => s.length;


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
                    (row ([13, 3, 4, 5, 5]) (S.map (test => test (adts))
                                                   (typeClassTests))))}
`;

module.exports = view
