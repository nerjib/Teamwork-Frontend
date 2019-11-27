import React from 'react';

import './getOneArticle.css'
class GetOneGif extends React.Component {
    constructor() {
        super();
        this.state = {
          response: 'Loading...',
          response1: 'Loading...'

        }
      }

    componentDidMount() {
        const { params } = this.props.match;
        fetch("/api/v1/gifs/"+params.id)
        .then(res => res.json())
      .then(res => this.setState({response: res.data.rows}));
  
      fetch("/api/v1/gifs/"+params.id)
      .then(res => res.json())
    .then(res => this.setState({response1: res.data.comments}));

      }
  
      
  render() {
    
    return (
      <div className="Body" >      
       <ul>
      {Object.keys(this.state.response).map(item => (
       
       <div className="Article-block" key={item}>
        <div >{this.state.response[item].title}</div><p><img className = 'image' alt = {this.state.response[item].id} src= {this.state.response[item].gifurl}></img></p>
          
          </div>
           
        ))}
      </ul>
      <div className="comment-title" >Comments</div>
      <div >
      <ul >
      {Object.keys(this.state.response1).map(item => (
        <div className="Comment-block" key={item}>
       <div className="PP">user:{this.state.response1[item].userid}</div> <p>{this.state.response1[item].comment}</p>
       <div className="Pd">{this.state.response1[item].post_date}</div>   
          </div>
           
        ))}
      </ul>
      </div>
      </div>
    );
   

  }
}
export default GetOneGif