const { gql } = require("apollo-server-express")

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
}

type Mutation {
  createReview(input: ReviewInput): Review
  updateReview(id: ID!, input: ReviewInput): Review
  deleteReview(id: ID!): Review
  createCompany(input: CompanyInput): Company
  updateCompany(id: ID!, input: CompanyInput): Company
  deleteCompany(id: ID!): Company
  createUser(input: UserInput): User
  updateUser(id: ID!, input: UserInput): User
  deleteUser(id: ID!): User
  createComment(input: CommentInput): Comment
  updateComment(id: ID!, input: CommentInput): Comment
  deleteComment(id: ID!): Comment
}

`

module.exports = typeDefs
