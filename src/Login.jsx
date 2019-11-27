import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import './Login.css'

export default class Login extends Component {
  constructor(props) {
    super(props)
    let login = 'stop';
    this.state = {
      email : '',
      password: '',
      login,
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
       // return < Redirect to="/home"/>

       this.setState({
         login: 'pass'
        });
        localStorage.setItem('login', this.state.login);

       // return < Redirect to="/home"/>
              // this.props.history.push('/home');
      } else {
        localStorage.setItem('login', 'stop');
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      localStorage.setItem('login', 'stop');

      alert('Error logging in please try again');
    });
  }

  render() {
    if (this.state.login === 'pass'){
      return <Redirect to='/home'> </Redirect>
    }
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