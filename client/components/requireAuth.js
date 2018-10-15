import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/currentUser';
import { hashHistory } from 'react-router';

/**
 * This is a Higher Order Component (HOC), which receives
 * a WrappedComponent, renders it with all of its own props,
 * but also provides them an additional behavior.
 * In this case, we check if the user is logged in, and if not,
 * redirects to the "/login" page.
 */
export default (WrappedComponent) => {
  class RequireAuth extends Component {

    // This will be called whenever the "currentUser" query is ran.
    // This behavior is provided by Apollo.
    componentWillUpdate(nextProps) {
      // If query is done running, and user is not logged in,
      // redirects user to the "/login" page.
      if (!nextProps.data.loading && !nextProps.data.user) {
        hashHistory.push('/login');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  
  return graphql(query)(RequireAuth);
}
