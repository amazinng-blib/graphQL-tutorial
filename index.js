// for server setup
// tells apollo how to handle diferent types
import { ApolloServer } from '@apollo/server';
// start of the server
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import _db from './_db.js';

// server setup

const resolvers = {
  Query: {
    games() {
      return _db.games;
    },
    reviews() {
      return _db.reviews;
    },
    authors() {
      return _db.authors;
    },
    review(_, args) {
      return _db.reviews.find((review) => review?.id === args.id);
    },
  },
};

const server = new ApolloServer({
  // typeDefs -- definitions of different types of data we want to use in our graph
  typeDefs,
  // resolvers  -- contains bunch of resolver functions for handling incoming request
  resolvers,
});

console.log('restart', 'hello');

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at: ${url}`);
