const resolver = {
  Query: {
    user: async () => {
      return "hey yo";
    },
  },
  Mutation: {
    createUser: async (args) => {
      console.log(args);
      return {};
    },
  },
};

export default resolver;
