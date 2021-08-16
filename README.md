# Sanctuary ADT Matrix

[![npm](https://img.shields.io/npm/v/sanctuary-adt-matrix.svg)](https://www.npmjs.com/package/sanctuary-adt-matrix)


Usage:

```
$ npx sanctuary-adt-matrix
```

|  Type Class   | Pair | Maybe | Either | Future |
| ------------- | ---- | ----- | ------ | ------ |
| Setoid        | ✅   | ✅    | ✅     | ❌    |
| Ord           | ✅   | ✅    | ✅     | ❌    |
| Semigroupoid  | ✅   | ❌    | ❌     | ❌    |
| Category      | ❌   | ❌    | ❌     | ❌    |
| Semigroup     | ✅   | ✅    | ✅     | ❌    |
| Monoid        | ❌   | ✅    | ❌     | ❌    |
| Group         | ❌   | ❌    | ❌     | ❌    |
| Filterable    | ❌   | ✅    | ❌     | ❌    |
| Functor       | ✅   | ✅    | ✅     | ✅    |
| Bifunctor     | ✅   | ❌    | ✅     | ✅    |
| Profunctor    | ❌   | ❌    | ❌     | ❌    |
| Apply         | ✅   | ✅    | ✅     | ✅    |
| Applicative   | ❌   | ✅    | ✅     | ✅    |
| Chain         | ✅   | ✅    | ✅     | ✅    |
| ChainRec      | ❌   | ✅    | ✅     | ✅    |
| Monad         | ❌   | ✅    | ✅     | ✅    |
| Alt           | ❌   | ✅    | ✅     | ✅    |
| Plus          | ❌   | ✅    | ❌     | ❌    |
| Alternative   | ❌   | ✅    | ❌     | ❌    |
| Foldable      | ✅   | ✅    | ✅     | ❌    |
| Traversable   | ✅   | ✅    | ✅     | ❌    |
| Extend        | ✅   | ✅    | ✅     | ❌    |
| Comonad       | ✅   | ❌    | ❌     | ❌    |
| Contravariant | ❌   | ❌    | ❌     | ❌    |


## Using the matrix API

Test [Sanctuary's](https://sanctuary.js.org/) Algebraic Data Types (ADT) for [Type Class](https://github.com/sanctuary-js/sanctuary-type-classes/tree/v12.1.0#sanctuary-type-classes) support.

> The API is **unstable** and will probably change between minor versions.

```js
const { adts, typeClassTests } = require ('sanctuary-adt-matrix');

// adts :: Array (Array (String Adt))
[
  ['Pair'  , Adt],
  ['Maybe' , Adt],
  ['Either', Adt],
  ['Future', Adt]
]

// typeClassTests :: Array (Array (String Adt) -> Array (String))
typeClassTests [0] (adts) // -> [ 'Setoid', '✅', '✅', '✅', '❌' ]
```

## Adding an ADT

Currently (1.0.1), you need to change two places. To add a new ADT, you need to edit _index.js_,
require the new ADT and add it to the `adts` array.

```js
const adts = [
  ['Pair'  , S.Pair ('') ('')],
  ['Maybe' , S.Just ('')],
  ['Either', S.Right ('')],
  ['Future', Future (reject => resolve => () => {})]
];
```
_The tuple is `[name:String, instance:ADT]`._

Then you need to set padding in _view/markdown.js_ in the `view` function.

```js
${S.joinWith ('\n')
             (S.map (r => `| ${r} |`)
                    (row ([13, 3, 4, 5, 5]) (S.map (test => test (adts))
                                                   (typeClassTests))))}
```
_The padding is `[13, 3, 4, 5, 5]`._

```js
[
  13, // = longest Type Class word
  3,  // = padding for Pair column
  4,  // = padding for Maybe column
  5,  // = padding for Either column
  5,  // = padding for Future column
      // add padding for your ADT column - usually number of characters minus 1
]
```