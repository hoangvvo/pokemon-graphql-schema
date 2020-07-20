# pokemon-graphql-schema

This packages export `typeDefs` and `resolvers`, which can be used to create a GraphQL execution schema that queries Pokémon data from PokéAPI v2.

## Usage

```js
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { typeDefs, resolvers } = require('pokemon-graphql-schema');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
```

### Fetch polyfill

In `node`, you must polyfill `fetch` using [node-fetch](https://github.com/node-fetch/node-fetch):

```js
const fetch = require('node-fetch');

if (!globalThis.fetch) {
    globalThis.fetch = fetch;
}
```

