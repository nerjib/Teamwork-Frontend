import React, { Component } from 'react';

export default class PostArticle extends Component {
  constructor(props) {
    super(props)
    this.state = {
     title : '',
      article: '',
      status: ''
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
    fetch('https://powerful-garden-82332.herokuapp.com/api/v1/articles', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json',
        token: localStorage.getItem('token')
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
        <div>
        <div className='Post-form' style={{width:'20px', display:''}}>
      <form onSubmit={this.onSubmit}>
        <input
          type="input"
          name="title"
          placeholder="title"
          value={this.state.title}
          onChange={this.handleInputChange}
          required
        />
        <input
          type="input"
          name="article"
          placeholder="Article"
          value={this.state.article}
          onChange={this.handleInputChange}
          required
        />
                {this.state.status}
      <input
          type="file"
          name="image"
          onChange={this.handleInputChange}
          
        />
        <input type="submit" value="Post"/>

  
      </form>
      </div>
      </div>
    );
  }
}