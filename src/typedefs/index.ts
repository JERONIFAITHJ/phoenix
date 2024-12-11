const sample = `#graphql
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;

const typeDefs = [sample];

export default typeDefs;
