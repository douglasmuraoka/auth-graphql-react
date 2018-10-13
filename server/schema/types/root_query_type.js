const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;
const UserType = require('./user_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // Query that returns the currently logged user.
    // If user is logged in, Passport will populate the req.user object.
    user: { type: UserType },
    resolve(parentValue, args, req) {
      return req.user;
    }
  }
});

module.exports = RootQueryType;
