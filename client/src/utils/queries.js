import { gql } from "@apollo/client";

export const QUERY_REVIEWS = gql`
  query Reviews {
    reviews{
      company
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
  query Review($reviewId: ID!) {
  review(reviewId: $reviewId) {
    interviewExperience
    role
    company
    _id
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


