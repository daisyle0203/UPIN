const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category } = require('../models');
const { signToken } = require('../utils/auth');
//testing
const resolvers = {
  Query: {
   
  },
  Mutation: {
    
  },
};

module.exports = resolvers;
