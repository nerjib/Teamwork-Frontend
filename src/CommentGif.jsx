import React, { Component } from 'react';

export default class CommentGif extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comment : '',
        status: '',
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
    fetch('https://powerful-garden-82332.herokuapp.com/api/v1/gifs/'+this.props.gifId+'/comment', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token'),

      }
    })
    .then(res => {
      if (res.status === 201) {
        this.setState({
            status: 'Success',
            comment: '',
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
       {this.state.status}</td></tr></table></div>  </form>
      </div>
    );
  }
}