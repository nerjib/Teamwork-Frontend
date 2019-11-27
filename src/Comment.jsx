import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import paramCase from 'param-case';

export default class Comment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comment : '',
     
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
    fetch('/api/v1/articles/'+this.props.articleId+'/comment', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 201) {
        this.setState({
            status: 'Success'
        });
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Posting Error');
    });
  }

  render() {
    return (
      <div >
      <form className="Container" onSubmit={this.onSubmit}>
        <div className="table">
<table align="center" ><tr><td>        <input
          type="text"
          name="comment"
          placeholder="Comment"
          value={this.state.comment}
          onChange={this.handleInputChange}
          required
        /></td></tr>
       <tr><td>        <input type="submit" value="Post"/>
    </td></tr></table></div>  </form>
      </div>
    );
  }
}