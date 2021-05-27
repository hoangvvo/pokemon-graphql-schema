import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";
import berries from "./Berries/resolvers.js";
import Berries from "./Berries/schema.graphql";
import contests from "./Contests/resolvers.js";
import Contests from "./Contests/schema.graphql";
import machines from "./Machines/resolvers.js";
import Machines from "./Machines/schema.graphql";
import pokemon from "./Pokemon/resolvers.js";
import Pokemon from "./Pokemon/schema.graphql";
import utility from "./Utility/resolvers.js";
import Utility from "./Utility/schema.graphql";

export const schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs([Berries, Contests, Machines, Pokemon, Utility]),
  resolvers: mergeResolvers([berries, contests, machines, pokemon, utility]),
});
