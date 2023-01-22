const { AuthenticationError } = require("apollo-server-express");
const { User, Review } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("reviews");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("reviews");
    },

    reviews: async (parent, { company }) => {
      try {
        const params = company ? { company } : {};
        const reviews = await Review.find(params)
          .populate("comments")
          .sort({ createdAt: -1 });
        return reviews;
      } catch (error) {
        console.log(error);
      }
    },
    review: async (parent, { reviewId }) => {
      return Review.findOne({ _id: reviewId });
    },
    me: async (parent, args, context) => {
      try {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id })
            .populate("reviews")
            .select("-__v -password");
          return userData;
        }
        throw new AuthenticationError("Not logged in");
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      try {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
      } catch (err) {
        console.log(err);
      }
    },
    login: async (parent, { email, password }) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          throw new AuthenticationError(
            "No user found with this email address"
          );
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw new AuthenticationError("Incorrect credentials");
        }

        const token = signToken(user);

        return { token, user };
      } catch (err) {
        console.log(err);
      }
    },
    addReview: async (
      parent,
      { company, interviewExperience, role, interviewerInfo, rating },
      context
    ) => {
      if (context.user) {
        const review = await Review.create({
          company,
          interviewExperience,
          role,
          interviewerInfo,
          rating,
          reviewAuthor: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { reviews: review._id } }
        );
        return review;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addComment: async (parent, { reviewId, commentText }, context) => {
      if (context.user) {
        return Review.findOneAndUpdate(
          { _id: reviewId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    removeReview: async (parent, { reviewId }, context) => {
      if (context.user) {
        const review = await Review.findOneAndDelete({
          _id: reviewId,
          reviewAuthor: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { reviews: review._id } }
        );

        return review;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    removeComment: async (parent, { reviewId, commentId }, context) => {
      if (context.user) {
        return Review.findOneAndUpdate(
          { _id: reviewId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
