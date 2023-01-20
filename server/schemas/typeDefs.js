const { gql } = require("apollo-server-express")

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    reviews: [Review]!
    comments: [Comment]
  }

  type Review {
    _id: ID
    interviewExperience: String
    reviewAuthor: String
    createdAt: String
    role: String
    interviewerInfo: String
    overallExperience: Int
    company: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    reviewAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    reviews(username: String): [Review]
    review(reviewId: ID!): Review
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addReview(interviewExperience: String!): Review
    addComment(reviewId: ID!, commentText: String!): Review
    removeReview(reviewId: ID!): Review
    removeComment(reviewId: ID!, commentId: ID!): Review
  }
`

module.exports = typeDefs
