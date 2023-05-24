const { AuthenticationError } = require('apollo-server-express');
const { User, Thought } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('cardio resistance');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('cardio resistance');
    },
    // thoughts: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return Thought.find(params).sort({ createdAt: -1 });
    // },
    // thought: async (parent, { thoughtId }) => {
    //   return Thought.findOne({ _id: thoughtId });
    // },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('cardio resistance');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addCardio: async (parent,args, context) => {
      if (context.user) {
        const cardio = await Cardio.create({
          args
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { cardio: cardio._id } }
        );

        return cardio;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addResistance: async (parent,args, context) => {
      if (context.user) {
        return Resistance.findOneAndUpdate(
          { _id: thoughtId },
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
      throw new AuthenticationError('You need to be logged in!');
    },
    removeCardio: async (parent, args, context) => {
      if (context.user) {
        const cardio = await Cardio.findOneAndDelete({
          _id: cardioId,
          cardioAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { cardio: cardio._id } }
        );

        return cardio;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeResistance: async (parent, args, context) => {
      if (context.user) {
          const resistance = await Resistance.findOneAndDelete({
            _id: resistanceId,
            resistanceAuthor: context.user.username,
          });
  
          await User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { resistance: resistance._id } }
          );
     
      // if (context.user) {
      //    const resistance  = await Resistance.findOneAndDelete(
      //     { _id: resistanceId },
      //     {
      //       $pull: {
      //         comments: {
      //           _id: commentId,
      //           commentAuthor: context.user.username,
      //         },
      //       },
      //     },
      //     { new: true }
      //   );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
