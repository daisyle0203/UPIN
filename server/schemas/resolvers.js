const { AuthenticationError } = require("apollo-server-express")
const { User, Review, Comment, Company } = require("../models")
const { signToken } = require("../utils/auth")

const resolvers = {
  Query: {
    reviews: async (parent, args, { Review }) => {
      const reviews = await Review.find()
      return reviews
    },
    review: async (parent, { review }, { Review }) => {
      const review = await Review.findById(_id)
      return review
    },
    companies: async (parent, args, { Company }) => {
      const companies = await Company.find()
      return companies
    },
    company: async (parent, { _id }, { Company }) => {
      const company = await Company.findById(_id)
      return company
    },
    users: async (parent, args, { User }) => {
      const users = await User.find()
      return users
    },
    user: async (parent, { _id }, { User }) => {
      const user = await User.findById(_id)
      return user
    },
  },
  Mutation: {
    createReview: async (parent, { input }) => {
      const review = new Review(input)
      await review.save()
      return review
    },
    updateReview: async (parent, { id, input }) => {
      const review = await Review.findByIdAndUpdate(id, input, { new: true })
      return review
    },
    deleteReview: async (parent, { id }) => {
      const review = await Review.findByIdAndDelete(id)
      return review
    },
    createCompany: async (parent, { input }) => {
      const company = new Company(input)
      await company.save()
      return company
    },
    updateCompany: async (parent, { id, input }) => {
      const company = await Company.findByIdAndUpdate(id, input, { new: true })
      return company
    },
    deleteCompany: async (parent, { id }) => {
      const company = await Company.findByIdAndDelete(id)
      return company
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password })
      const token = signToken(user)
      return { token, user }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email })

      if (!user) {
        throw new AuthenticationError("No user found with this email address")
      }

      const correctPw = await user.isCorrectPassword(password)

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials")
      }

      const token = signToken(user)

      return { token, user }
    },
    addComment: async (parent, { comment }, context) => {
      if (context.user) {
        const comment = new Comment({ comment, user: context.user._id })
        await comment.save()
    
        await User.findByIdAndUpdate(
        { _id: context.user._id },
        { $push: { comments: comment._id } },
        { new: true }
      )
      return comment
    }
    throw new AuthenticationError("You need to be logged in!")  

    },
    updateComment: async (parent, { id, input }) => {
      const comment = await Comment.findByIdAndUpdate(id, input, { new: true })
      return comment
    },
    deleteComment: async (parent, { id }) => {
      const comment = await Comment.findByIdAndDelete(id)
      return comment
    },
  },
}

module.exports = resolvers
