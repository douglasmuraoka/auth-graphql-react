import React, { Component } from 'react';

/**
 * This is the authentication form component,
 * which should be resposible for reading all
 * data input from the user and do some operation with it.
 * 
 * The operation itself is provided by the parent component,
 * through the "onSubmit" prop. This callback is invoked
 * when the user submits this form.
 */
class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={this.onSubmit.bind(this)} className="col s4">
          <div className="input-field">
            <input placeholder="Email" value={this.state.email} onChange={event => this.setState({ email: event.target.value })} />
          </div>
          <div className="input-field">
            <input placeholder="Password" type="password" value={this.state.password} onChange={event => this.setState({ password: event.target.value })} />
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;