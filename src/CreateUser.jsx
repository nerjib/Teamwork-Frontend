import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import './Login.css'

export default class CreateUser extends Component {
  constructor(props) {
    super(props)
    let login = 'stop';
    this.state = {
      email : '',
      password: '',
      fname: '',
      lname: '',
      username: '',
      role: '',
      dept: '',
      status:'',      
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
    fetch('/api/v1/auth/create-user', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      console.log(res.status);
      if (res.status === 201) {
       // return < Redirect to="/home"/>

       this.setState({
                   email : '',
            password: '',
            fname: '',
            lname: '',
            username: '',
            role: '',
            dept: '',
            status: 'user added successfully',
          });
        } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      this.setState({
          status: 'user with this details exist'
      })
     // alert('User Exist');
    });
  }

  render() {
    return (
      <div >
      <form className="Container" onSubmit={this.onSubmit}>
        <h1>Fill user details bellow</h1>
        <div className="table">
<table align="center" ><tr><td>Email: </td><td><input
          type="email"
          name="email"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
        /></td></tr>
       
       <tr><td> Password</td><td> <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handleInputChange}
          required
        /></td></tr>

<tr><td> First Name</td><td> <input
          type="text"
          name="fname"
          placeholder="First name"
          value={this.state.fname}
          onChange={this.handleInputChange}
          required
        /></td></tr>
<tr><td> Last Name</td><td> <input
          type="text"
          name="lname"
          placeholder="Last name"
          value={this.state.lname}
          onChange={this.handleInputChange}
          required
        /></td></tr>

<tr><td> Username</td><td> <input
          type="text"
          name="username"
          placeholder="username"
          value={this.state.username}
          onChange={this.handleInputChange}
          required
        /></td></tr>
<tr><td> Role</td><td> <input
          type="text"
          name="role"
          placeholder="Role"
          value={this.state.role}
          onChange={this.handleInputChange}
          required
        /></td></tr>
<tr><td>Department</td><td> <input
          type="text"
          name="dept"
          placeholder="Department"
          value={this.state.dept}
          onChange={this.handleInputChange}
          required
        /></td></tr>
        
<tr><td></td><td>        <input type="submit" value="Submit"/>{this.state.status}
    </td></tr></table></div>  </form>
      </div>
    );
  }
}