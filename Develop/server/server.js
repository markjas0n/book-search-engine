// server.js
// Main entry point for the server. Sets up the Express app and integrates Apollo Server for GraphQL API.

const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas'); // Import GraphQL schema and resolvers
const { authMiddleware } = require('./utils/auth'); // Import custom authentication middleware
const db = require('./config/connection'); // MongoDB connection setup

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (production mode)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Set up Apollo Server with type definitions, resolvers, and context (auth middleware)
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// Start the Apollo Server and apply it as middleware to the Express app
server.start().then(() => {
  server.applyMiddleware({ app });

  // Start the Express server once the database connection is open
  db.once('open', () => {
    app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}${server.graphqlPath}`));
  });
});
