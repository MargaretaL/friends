// //var build = require('graphql'); ...build.buildSchema
// var { buildSchema } = require('graphql');
// // Construct a schema, using GraphQL schema language

// const schema = buildSchema(`

// input FriendInput {
//     id: String
//     firstName: String
//     lastName: String
//     gender: String
//     language: String
//     email: String
// }

// type Friend {
//     id: String
//     firstName: String
//     lastName: String
//     gender: String
//     language: String
//     email: String
// }
//   type Query {
//     getFriend(id: ID!): Friend
//   }

//   type Mutation {
//       createFriend(input: FriendInput): Friend
//       updateFriend(id: ID!, input: FriendInput): Friend
//   }
// `);

// //createFriend({input: FriendInput})

// module.exports = schema