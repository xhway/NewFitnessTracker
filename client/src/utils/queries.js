import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_SINGLE_EXERCICE = gql`
  query getSingleExercice($exerciceId: ID!) {
    cardio(cardioId: $cardioId) {
      _id
        name
        distance
        duration
        date }
    resistance (resistanceId: $resistanceId){
      _id
      name
      weight
      sets
      reps
      date
}
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      cardio {
        _id
        name
        distance
        duration
        date
      }
      resistance {
        _id
        name
      weight
      sets
      reps
      date
      }
    }
  }
`;
