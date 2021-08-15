'use strict'

const typeClasses = require ('fantasy-land')
const S           = require ('sanctuary')

const adts = [
  ['Pair'  , [S.Pair ('') ('')]],
  ['Maybe' , [S.Just (''), S.Nothing]],
  ['Either', [S.Right (''), S.Left]],
]

const trace = msg => x => (console.log (msg, x), x)

const getSupportedClasses = S.flip (adt => S.filter (tc => !!adt[tc])) (typeClasses)

const matrix = adts.map (([name, dataTypes]) => [name, dataTypes.map (getSupportedClasses)])

const sillyHead = ([name]) => name

const sillyLength = s => s.length

const pipeJoin = S.joinWith (' | ')

const header = S.compose (pipeJoin) (S.unchecked.map (sillyHead))

const headerAlignment = S.unchecked.pipe ([
  S.unchecked.map (S.compose (sillyLength) (sillyHead)),
  S.map (n => '-'.repeat (n)),
  pipeJoin
])

const rows = S.I

const view = adts => matrix =>
`
| Type Class | ${header (adts)} |
| ---------- | ${headerAlignment (adts)} |

`

// console.log (typeClasses)

console.log (view (adts) (matrix))

console.log (
	getSupportedClasses (S.Just (''))
)
