import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import currentUser from '../queries/currentUser';

/**
 * This is the component that will display the "Sign In"
 * and "Sign Up" buttons.
 */
class Header extends Component {
  render() {
    console.log(this.props.data.user); 
    return (
      <div>
        Header
      </div>
    );
  }
}

export default graphql(currentUser)(Header);