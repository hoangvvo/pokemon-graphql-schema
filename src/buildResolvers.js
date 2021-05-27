const BASE_URL = "https://pokeapi.co/api/v2";

/**
 *
 * @param obj An object with query name : endpoint
 * @example {"move_battle_style": "move-battle-style"}
 */
export const buildResolvers = (obj) => {
  const Query = {};
  for (const [query, endpoint] of Object.entries(obj)) {
    Query[query] = (_, { id }) => {
      return fetch(`${BASE_URL}/${endpoint}/${id}`).then((res) =>
        res.ok ? res.json : null
      );
    };
  }
  return { Query };
};

/**
 * Given a list of query_item return buildResolvers result with { query_item: "query-item" }
 * @param arr
 */
export const buildResolversWithQueryArrays = (...arr) => {
  const obj = {};
  for (const query of arr) {
    obj[query] = query.replaceAll("_", "-");
  }
  return buildResolvers(obj);
};
