import React, { Component } from 'react';

export default class PostArticle extends Component {
  constructor(props) {
    super(props)
    this.state = {
     title : '',
     gifTitle: '',
      article: '',
      status: '',
      image:null,
      content:'',

    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

handleImageChange = (e) => {
  this.setState({
    image: e.target.files[0]
  })
};
handleSubmit = (e) => {
  e.preventDefault();
  console.log(this.state);
  let form_data = new FormData();
  form_data.append('image', this.state.image);
  form_data.append('title', this.state.gifTitle);
  fetch('https://powerful-garden-82332.herokuapp.com/api/v1/gifs',{
      method: 'POST',
      body: form_data,
      headers: {
        token: localStorage.getItem('token')
      }
    }).then(res => {
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
      alert('Error image not uploaded');
    });
};

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
      alert('posting error');
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
        <input type="submit" value="Post"/>

  
      </form>
      </div>

      <div className='Post-form' style={{width:'20px', display:''}}>
      <form onSubmit={this.handleSubmit}>
        <input
          type="input"
          name="gifTitle"
          placeholder="title"
          value={this.state.gifTitle}
          onChange={this.handleInputChange}
          required
        />
      <input
          type="file"
          name="image"
          onChange={this.handleImageChange}
          id="image"          
        />
        <input type="submit" value="upload"/>

  
      </form>
      </div>
      <div style={{color: 'green'}}> 
      {this.state.status}
      </div>
      </div>
    );
  }
}