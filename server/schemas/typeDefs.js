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
    name: String
    distance: Int
    duration: Int
    date: String
  }

  type Resistance {
    _id: ID
    name: String
    weight: Int
    sets: Int
    reps: Int
    date: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCardio(cardioForm: String!): Cardio
    addResistance(resistanceForm: String!): Resistance
    removeCardio(cardioId: ID!): Cardio
    removeResistance(resistanceId: ID!): Resistance
  }
`;

module.exports = typeDefs;
