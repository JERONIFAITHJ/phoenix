import { Prisma } from "@prisma/client";
import prisma from "../prisma";

const resolver = {
  Query: {
    user: async () => {
      return "hey yo";
    },
  },
  Mutation: {
    createUser: async (args) => {
      await prisma.$queryRaw(
        Prisma.sql`INSERT INTO "Test" (name) VALUES ('FOO')`
      );
      return {};
    },
  },
};

export default resolver;
