const { ApolloServer, gql } = require('apollo-server-hapi');
const Hapi = require('@hapi/hapi');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

const RentalsAPI = require('./datasources/rentals');

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Rental" type defines the queryable fields for every rental in our data source.
  type Rental {
    beds: Int
    address: String
    rent: String
    description: String
    furnished: Boolean
    maximumTenants: Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "rentals" query returns an array of zero or more Rentals (defined above).
  type Query {
    rentals: [Rental]
  }
`;

const resolvers = {
  Query: {
    rentals: async(_source, _args, { dataSources }) => {
      return dataSources.rentalsAPI.getRentals();
    }
  },
};

async function StartServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        rentalsAPI: new RentalsAPI()
      }
    }
  });

  const app = new Hapi.server({
    port: 4000,
    host: 'localhost'
  });

  await server.applyMiddleware({
    app,
  });

  await server.installSubscriptionHandlers(app.listener);

  app.route({
    method: 'GET',
    path: '/api/getRentals',
    handler: (request, h) => {
      return db.get('rentals.manchester').value();
    }
  });

  await app.start();

  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
}

StartServer().catch(error => console.log(error));
