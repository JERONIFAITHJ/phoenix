import prisma from "../prisma";

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

const resolver = {
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

const resolvers = [resolver];

export default resolvers;
