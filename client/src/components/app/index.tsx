import React from 'react';

import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, HttpLink, InMemoryCache, gql } from 'apollo-boost';
import { Router } from "@reach/router";

import { Layout} from 'antd';
import 'antd/dist/antd.css';

import Home from '../homepage';
import './index.scss';

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
        rentals(searchLocation: "manchester") {
          beds,
          address,
          rent
        }
      }
    `
  });

const App = () => {
  const { Header, Content, Footer } = Layout;

  return (
    <ApolloProvider client={client}>
      <Layout data-testid="app-layout">
        <Header className='header'>
          <div className='header__logo'>
            <img src={require('../../images/URent.svg')} alt='URent' />
          </div>
        </Header>
        <Content>
          <Router>
            <Home path="/" />
          </Router>
        </Content>
        <Footer>
          Website built by Malcolm McConaghy
        </Footer>
      </Layout>
    </ApolloProvider>
  );
}

export default App;
