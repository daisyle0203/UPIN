import { gql } from "@apollo/client";

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

export const ADD_REVIEW = gql`
  mutation AddReview(
    $company: String!
    $interviewExperience: String!
    $role: String!
    $interviewerInfo: String!
    $rating: Int!
  ) {
    addReview(
      company: $company
      interviewExperience: $interviewExperience
      role: $role
      interviewerInfo: $interviewerInfo
      rating: $rating
    ) {
      _id
      company
      role
      interviewExperience
      interviewerInfo
      rating
      reviewAuthor
      createdAt
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation AddComment($reviewId: ID!, $commentText: String!) {
    addComment(reviewId: $reviewId, commentText: $commentText) {
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const REMOVE_REVIEW = gql`
  mutation Mutation($reviewId: ID!) {
    removeReview(reviewId: $reviewId) {
      _id
      company
      interviewExperience
      role
      interviewerInfo
      reviewAuthor
      rating
      createdAt
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation Mutation($reviewId: ID!, $commentId: ID!) {
    removeComment(reviewId: $reviewId, commentId: $commentId) {
      _id
      company
      interviewExperience
      role
      interviewerInfo
      reviewAuthor
      rating
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;
