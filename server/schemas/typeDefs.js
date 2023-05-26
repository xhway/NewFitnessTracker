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
    distance: Number
    duration: Number
    date: String
  }

  type Resistance {
    _id: ID
    name: String
    weight: Number
    sets: Number
    reps: Number
    date: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
   exercise(username: String): [Cardio]
   Cardio(cardioId: ID!): Cardio
   Resistance(resistanceID!): Resistance
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCardio(cardioForm: String!): Cardio
    addResistance(resistanceForm: String!): Resistance
    removeCardio(cardioId: ID!): Cardio
    removeResistance(resistancetId: ID!): Resistance
  }
`;

module.exports = typeDefs;
