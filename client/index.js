import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';
import App from './components/App';
import LoginForm from './components/LoginForm';

const networkInterface = createNetworkInterface({
  // Although "/graphql" is the default, when creating a new network
  // interface, this default is no longer valid. So here we need to
  // define our URI.
  uri: '/graphql',
  opts: {
    // "same-origin" indicates the client is communicating with a server
    // within the same origin, and it should send cookies whenever
    // a query is ran.
    credentials: 'same-origin'
  }
})

// "dataIdFromObject" allows us to define the data
// to be used as id from a record retrieved from the GraphQL server.
// When any entry is updated, Apollo will know that it needs to be
// refreshed, and will update the React view automatically with the
// brand new data :)
const client = new ApolloClient({
  dataIdFromObject: obj => obj.id,
  networkInterface
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="login" component={LoginForm} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
