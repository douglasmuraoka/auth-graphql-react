import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';
import App from './components/App';

// "dataIdFromObject" allows us to define the data
// to be used as id from a record retrieved from the GraphQL server.
// When any entry is updated, Apollo will know that it needs to be
// refreshed, and will update the React view automatically with the
// brand new data :)
const client = new ApolloClient({
  dataIdFromObject: obj => obj.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
