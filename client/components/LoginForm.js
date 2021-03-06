import React, { Component } from 'react';
import AuthForm from './AuthForm';
import { graphql } from 'react-apollo';
import mutation from '../mutations/login';
import query from '../queries/currentUser';
import { hashHistory } from 'react-router';

/**
 * This is the component that renders a form containing
 * the email and password inputs, and when submitted,
 * invokes the "login" mutation.
 */
class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = { errors: []};
  }

  /**
   * Since this component is wrapped by the "currentUser" query,
   * whenever that query is ran, this component is automatically
   * updated by Apollo. So the trick here is, whenever we have
   * a logged in user, we should redirect to the dashboard.
   */
  componentWillUpdate(nextProps) {
    if(nextProps.data.user) {
      hashHistory.push('/dashboard');
    }
  }

  onSubmit({ email, password }) {
    this.props.mutate({
      variables: {
        email,
        password
      },
      refetchQueries: [{ query }]
    }).catch(res => {
      const errors = res.graphQLErrors.map(error => error.message);
      this.setState({ errors });
    });
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm onSubmit={this.onSubmit.bind(this)} errors={this.state.errors} />
      </div>
    );
  }
}

export default graphql(query)(
  graphql(mutation)(LoginForm)
);