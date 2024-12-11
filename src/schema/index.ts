import { makeExecutableSchema } from "@graphql-tools/schema";
import resolvers from "../resolvers";
import typeDefs from "../typedefs";

let schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export { schema };
