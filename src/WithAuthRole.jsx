import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default function withAuthRole(ComponentToProtect) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false,
      };
    }

    componentDidMount() {
     let obj = {
        method: 'GET',
        headers: {
          'token': localStorage.getItem('token')
        }
      }
      fetch('https://powerful-garden-82332.herokuapp.com/api/v1/checkrole', obj)
        .then(res => {
          if (res.status === 200) {
            this.setState({ loading: false });
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
          this.setState({ loading: false, redirect: true });
        });
    }


    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        alert('You are not authorize')
        return <Redirect to="/feeds" />;
      }
      return <ComponentToProtect {...this.props} />;
    }
  }
}