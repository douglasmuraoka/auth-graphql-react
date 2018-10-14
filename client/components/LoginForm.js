import React, { Component } from 'react';
import AuthForm from './AuthForm';
import { graphql } from 'react-apollo';
import mutation from '../mutations/login';

/**
 * This is the component that renders a form containing
 * the email and password inputs, and when submitted,
 * invokes the "login" mutation.
 */
class LoginForm extends Component {
  onSubmit({ email, password }) {
    this.props.mutate({
      variables: {
        email,
        password
      }
    });
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm onSubmit={this.onSubmit.bind(this)}/>
      </div>
    );
  }
}

export default graphql(mutation)(LoginForm);