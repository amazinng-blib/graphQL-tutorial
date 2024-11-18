// for server setup
// tells apollo how to handle diferent types
import { ApolloServer } from '@apollo/server';
// start of the server
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema';

// server setup

const server = new ApolloServer({
  // typeDefs -- definitions of different types of data we want to use in our graph
  typeDefs,
  // resolvers  -- contains bunch of resolver functions for handling incoming request
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log('Server ready at port', 4000);
