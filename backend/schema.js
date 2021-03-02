const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
    users: [User]
  },
  type User {
    id: ID!
    name: String!
    age: Int!
  },
  type Mutation {
      createUser(name: String!, age:Int!): User
  }

`);

module.exports = {
    schema
}