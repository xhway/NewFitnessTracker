const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Cardio  {
    _id: ID
    cardioText: String
    cardioAuthor: String
    createdAt: String
  }

  type Resistance {
    _id: ID
    resistanceText: String
    resistanceAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
   exercise(username: String): [Cardio]
   cardio(CardioId: ID!): Cardio
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCardio(thoughtText: String!): Cardio
    addResistance(thoughtId: ID!, commentText: String!): Resistance
    removeCardio(thoughtId: ID!): Cardio
    removeResistance(thoughtId: ID!, commentId: ID!): Resistance
  }
`;

module.exports = typeDefs;
