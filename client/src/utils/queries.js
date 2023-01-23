import { gql } from "@apollo/client";

export const QUERY_COMPANY_REVIEWS = gql`
  query Reviews($company: String) {
    reviews(company: $company) {
      interviewExperience
      role
      interviewerInfo
      rating
      reviewAuthor
      _id
      createdAt
      comments {
        commentText
        commentAuthor
        createdAt
        _id
      }
    }
  }
`;

export const QUERY_USER = gql`
  query User($username: String!) {
    user(username: $username) {
      reviews {
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
  }
`;

export const QUERY_ME = gql`
  query Query {
    me {
      _id
      username
      email
      reviews {
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
  }
`;

export const QUERY_REVIEW = gql`
  query User($username: String!) {
    user(username: $username) {
      reviews {
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
  }
`;
