import { ApolloServer } from "@apollo/server";
import { Application } from "express";
import { expressMiddleware } from "@apollo/server/express4";
import { schema } from "../schema";

export default async function (app: Application) {
  const server = new ApolloServer({ schema });

  await server.start();

  app.use("/graphql", expressMiddleware(server));
}
