const typeDefs = `#graphql
 type Query{
   user: String
 }

 type Mutation {
    createUser(input: CreateUserInput):  CreateUserResponse
 }

 input CreateUserInput {
    email: String
    password: String
 }

 type CreateUserResponse {
    status: Int
    message: String
 }
`;

export default typeDefs;
