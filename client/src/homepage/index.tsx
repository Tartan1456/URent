import React from 'react';

import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, HttpLink, InMemoryCache, gql } from 'apollo-boost';

import { Layout } from 'antd';

import './index.css';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
  })
});

client
  .query({
    query: gql`
      {
        rentals {
          beds,
          address,
          rent
        }
      }
    `
  });

const HomePage = () => {
  const { Header, Content, Footer } = Layout;

  return (
    <ApolloProvider client={client}>
      <div className="homepage">

      </div>
    </ApolloProvider>
  );
}

export default HomePage;
