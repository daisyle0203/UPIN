const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Review {
    _id: ID!
    company: Company!
    user: User!
    date: String!
    interviewExperience: String
    companyCulture: String
    interviewer: String
    overallExperience: Int
    isAnonymous: Boolean
    comments: [Comment]
  }

  type Company {
    _id: ID!
    name: String!
    website: String!
    location: String!
    reviews: [Review]
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    reviews: [Review]
    comments: [Comment]
  }

  type Comment {
    _id: ID!
    review: Review!
    user: User!
    comment: String!
    date: String!
  }

  input ReviewInput {
    company: ID!
    user: ID!
    date: String!
    interviewExperience: String
    companyCulture: String
    interviewer: String
    overallExperience: Int
    isAnonymous: Boolean
  }

  input CompanyInput {
    name: String!
    website: String!
    location: String!
  }

  input UserInput {
    email: String!
    password: String!
  } 

  type Auth {
    token: ID!
    user: User
  }

  input CommentInput {
    review: ID!
    user: ID!
    comment: String!
    date: String!
  }

  type Query {
    reviews: [Review]
    review(id: ID!): Review
    companies: [Company]
    company(id: ID!): Company
    users: [User]
    user(id: ID!): User
    comments: [Comment]
    comment(id: ID!): Comment
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    createReview(input: ReviewInput): Review
    updateReview(id: ID!, input: ReviewInput): Review
    deleteReview(id: ID!): Review
    createCompany(input: CompanyInput): Company
    updateCompany(id: ID!, input: CompanyInput): Company
    deleteCompany(id: ID!): Company
    addUser(username: String!, email: String, password: String!): Auth
    updateUser(id: ID!, input: UserInput): User
    deleteUser(id: ID!): User
    addComment(input: CommentInput): Comment
    updateComment(id: ID!, input: CommentInput): Comment
    deleteComment(id: ID!): Comment
  }
`;

module.exports = typeDefs;
