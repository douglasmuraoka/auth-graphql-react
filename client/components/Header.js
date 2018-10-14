import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import currentUser from '../queries/currentUser';
import { Link } from 'react-router';
import logout from '../mutations/logout';

/**
 * This is the component that will display the "Sign In"
 * and "Sign Up" buttons.
 */
class Header extends Component {

  /**
   * This onClick handler invokes the "logout" mutation,
   * and refetches the initial query, so the React view is
   * updated with the logged out user.
   */
  onLogoutClick () {
    this.props.mutate({
      refetchQueries: [{
        query: currentUser
      }]
    });
  }

  renderButtons() {
    const { loading, user } = this.props.data;
    // Returns nothing if the query is still running
    if (loading) {
      return <div />;
    }
    // If there is a user logged in, show the "logout" button
    if (user) {
      return (
        <li>
          <a onClick={this.onLogoutClick.bind(this)}>Logout</a>
        </li>
      );
    }
    // TODO: remove this stub and add real implementation
    return (
      <div>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </div>
    );
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">Home</Link>
          <ul className="right">
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default graphql(logout)(
  graphql(currentUser)(Header)
);