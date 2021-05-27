# pokemon-graphql-schema

This packages export `GraphQLSchema` built with [graphql-tools](https://www.graphql-tools.com/), which can be used to create a GraphQL service that queries Pokémon data from [PokéAPI v2](https://pokeapi.co/).

## Development

This library is still missing most of the API. Help us out by creating GraphQL Schema and resolvers based on [PokéAPI v2 docs](https://pokeapi.co/docs/v2).

The convention is to preserve naming from their API, except `-` in query name will be replaced with `_`.

## Installation

```bash
npm i pokemon-graphql-schema graphql
```

## Usage

```js
// ES Module
import { schema } from "pokemon-graphql-schema";
// CommonJS
const { schema } = require("pokemon-graphql-schema");
```

### Fetch polyfill

In `node`, you must polyfill `fetch` using [node-fetch](https://github.com/node-fetch/node-fetch):

```js
const fetch = require("node-fetch");

if (!globalThis.fetch) {
    globalThis.fetch = fetch;
}
```

## License

[MIT](LICENSE). Do whatever your heart desires!