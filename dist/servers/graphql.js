"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;
const books = [
    {
        title: "The Awakening",
        author: "Kate Chopin",
    },
    {
        title: "City of Glass",
        author: "Paul Auster",
    },
];
const resolvers = {
    Query: {
        books: async () => {
            // const f = await
            return books;
        },
    },
};
async function default_1(app) {
    const server = new server_1.ApolloServer({
        typeDefs,
        resolvers,
    });
    await server.start();
    app.use("/graphql", (0, express4_1.expressMiddleware)(server));
}
//# sourceMappingURL=graphql.js.map