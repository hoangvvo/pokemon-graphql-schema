# pokemon-graphql-schema

This packages export `GraphQLSchema`, which can be used to create a GraphQL service that queries Pokémon data from PokéAPI v2.

## Usage

```js
const schema = require('pokemon-graphql-schema');
```

### Fetch polyfill

In `node`, you must polyfill `fetch` using [node-fetch](https://github.com/node-fetch/node-fetch):

```js
const fetch = require('node-fetch');

if (!globalThis.fetch) {
    globalThis.fetch = fetch;
}
```

