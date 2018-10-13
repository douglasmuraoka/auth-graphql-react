const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;
const UserType = require('./types/user_type');
const AuthService = require('../services/auth');

/**
 * This is the file where we define our mutations.
 * The mutations should be "fields" of the "mutation" root type.
 */
const mutation = new GraphQLObjectType({
  name: 'mutation',
  fields: {
    signup: {
      type: UserType, // This is the return type of this mutation
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      // This request object is coming from Express :)
      resolve(parentValue, { email, password }, req) {
        return AuthService.signup({ email, password, req });
      }
    },
    logout: {
      type: UserType,
      // The req.user is populated by Passport.js.
      // Passport.js also provides us the logout function on the req object,
      // which handles everything for us :)
      resolve(parentValue, args, req) {
        const { user } = req;
        req.logout();
        return user;
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.login({ email, password, req });
      }
    }
  }
});

module.exports = mutation;