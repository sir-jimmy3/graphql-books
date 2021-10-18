const { ApolloServer } = require('apollo-server');
const Query = require('./resolvers/Query');
const Author = require('./resolvers/Author');
const Book = require('./resolvers/Book');
const Mutation = require('./resolvers/Mutation');
const { authors, books } = require('./db');
const typeDefs = require('./schema');

const server = new ApolloServer({typeDefs, resolvers: {Query, Author, Book, Mutation}, context: {authors, books}});

server.listen().then(({url}) => {
    console.log(`Server is ready at ${url}`)
})