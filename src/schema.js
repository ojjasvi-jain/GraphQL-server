const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    tracksForHome: [Track!]!
  }

  type Track {
    id: ID!
    title: String!
    thumbnail: String
    author: Author!
    length: Int
    moduleCount: Int
  }
  type Author {
    id: ID!
    photo: String
    name: String!
  }
`;

module.exports = typeDefs;
