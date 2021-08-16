# Sanctuary ADT Matrix

Usage:

```
$ npx sanctuary-adt-matrix
```

|  Type Class   | Pair | Maybe | Either | Future |
| ------------- | ---- | ----- | ------ | ------ |
| Setoid        | ✅   | ✅    | ✅     | ❌     |
| Ord           | ✅   | ✅    | ✅     | ❌     |
| Semigroupoid  | ✅   | ❌    | ❌     | ❌     |
| Category      | ❌   | ❌    | ❌     | ❌     |
| Semigroup     | ✅   | ✅    | ✅     | ❌     |
| Monoid        | ❌   | ✅    | ❌     | ❌     |
| Group         | ❌   | ❌    | ❌     | ❌     |
| Filterable    | ❌   | ✅    | ❌     | ❌     |
| Functor       | ✅   | ✅    | ✅     | ✅     |
| Bifunctor     | ✅   | ❌    | ✅     | ✅     |
| Profunctor    | ❌   | ❌    | ❌     | ❌     |
| Apply         | ✅   | ✅    | ✅     | ✅     |
| Applicative   | ❌   | ✅    | ✅     | ✅     |
| Chain         | ✅   | ✅    | ✅     | ✅     |
| ChainRec      | ❌   | ✅    | ✅     | ✅     |
| Monad         | ❌   | ✅    | ✅     | ✅     |
| Alt           | ❌   | ✅    | ✅     | ✅     |
| Plus          | ❌   | ✅    | ❌     | ❌     |
| Alternative   | ❌   | ✅    | ❌     | ❌     |
| Foldable      | ✅   | ✅    | ✅     | ❌     |
| Traversable   | ✅   | ✅    | ✅     | ❌     |
| Extend        | ✅   | ✅    | ✅     | ❌     |
| Comonad       | ✅   | ❌    | ❌     | ❌     |
| Contravariant | ❌   | ❌    | ❌     | ❌     |


## Using the matrix API

Test [Sanctuary](https://sanctuary.js.org/) <acronym title="Algebraic Data Type">ADT's</acronym> for [Type Class](https://github.com/sanctuary-js/sanctuary-type-classes/tree/v12.1.0#sanctuary-type-classes) support.

```js
const { adts, typeClassTests } = require ('sanctuary-adt-matrix');

// adts :: Array (Array (String Adt))
[
  ['Pair'  , Adt],
  ['Maybe' , Adt],
  ['Either', Adt],
  ['Future', Adt]
]

// typeClassTests :: Array (Adt -> Array (String))
typeClassTests [0] (adts) // -> [ 'Setoid', '✅', '✅', '✅', '❌' ]
```
