import { ApolloServer } from "@apollo/server";
import { Application } from "express";
import { expressMiddleware } from "@apollo/server/express4";
import prisma from "../prisma";

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
      const f = await prisma.test.create({
        data: {
          name: "JERONI",
        },
      });
      return books;
    },
  },
};

export default async function (app: Application) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use("/graphql", expressMiddleware(server));
}
