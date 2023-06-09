const express = require('express');
// Uncomment the following code once you have built the queries and mutations in the client folder
// const { ApolloServer } = require('apollo-server-express');
const path = require('path');
require('dotenv').config({path: '../.env'});

// Uncomment the following code once you have built the queries and mutations in the client folder
// const { typeDefs, resolvers } = require('./schemas');


// Comment out this code once you have built out queries and mutations in the client folder
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();
// Uncomment the following code once you have built the queries and mutations in the client folder
/*
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
*/

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Comment out this code once you have built out queries and mutations in the client folder
app.use(routes);

// Uncomment the following code once you have built the queries and mutations in the client folder
/* 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};
*/
// if we're in production, serve client/build as static assets

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  console.log(__dirname, "dirname")
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

// Comment out this code once you have built out queries and mutations in the client folder
  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));

// Uncomment the following code once you have built the queries and mutations in the client folder
// startApolloServer();
