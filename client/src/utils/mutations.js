import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_CARDIO = gql`
mutation addCardio($cardioForm: String!) {
  addCardio(cardioForm: $cardioForm) {
    name
    distance
    duration
    date
  }
}
`;

export const ADD_RESISTANCE = gql`
mutation addResistance($resistanceForm: String!) {
  addResistance(rsistanceForm: $resistanceForm) {
    name
    weight
    sets
    reps
    date
  }
}
`;

