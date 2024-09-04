
// Combines and exports the typeDefs and resolvers for use in the Apollo Server.

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

module.exports = { typeDefs, resolvers };
