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
