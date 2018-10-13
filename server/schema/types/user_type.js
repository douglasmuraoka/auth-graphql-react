const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;

/**
 * Definition of "UserType" which are the users that
 * can signup/login on our server :)
 */
const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    email: { type: GraphQLString }
  }
});

module.exports = UserType;