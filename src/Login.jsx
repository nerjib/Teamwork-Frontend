import React, { Component } from 'react';
import './Login.css'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email : '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    fetch('/api/v1/auth/signin', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      console.log(res.status);
      if (res.status === 200) {
        this.props.history.push('/home');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
    });
  }

  render() {
    return (
      <div >
      <form className="Container" onSubmit={this.onSubmit}>
        <h1>Login Below!</h1>
        <div className="table">
<table align="center" ><tr><td>        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
        /></td></tr>
       
       <tr><td> <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handleInputChange}
          required
        /></td></tr>
<tr><td>        <input type="submit" value="Submit"/>
    </td></tr></table></div>  </form>
      </div>
    );
  }
}