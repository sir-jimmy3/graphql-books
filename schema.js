const { gql } = require('apollo-server');

const typeDefs = gql`
    type Book {
        name: String!
        description: String!
        author: Author!
    }

    type Author {
        name: String!
        books: [Book]
    }

    type Query {
        books: [Book]
        authors: [Author]
    }

    type Mutation {
        addBook(
            name: String!
            description: String!
            author: String!
        ): Book
        removeBook(name: String!): Boolean
    }
`

module.exports = typeDefs;