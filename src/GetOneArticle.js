import React from 'react';
import Comment from './Comment'

import './getOneArticle.css'
class GetOneArticle extends React.Component {
    constructor() {
        super();
        this.state = {
          response: 'Loading...',
          response1: 'Loading...',
          articleId: ''

        }
      }

    componentDidMount() {
        const { params } = this.props.match;
        fetch("/api/v1/articles/"+params.id)
        .then(res => res.json())
      .then(res => this.setState({
        response: res.data.rows,
        articleId: params.id,
      }));
  
      fetch("/api/v1/articles/"+params.id)
      .then(res => res.json())
    .then(res => this.setState({response1: res.data.comments}));

      }
  
      
  render() {
     const response = this.state.response
     const response1 = this.state.response1

    return (
      <div className="Body" >      
       <ul>
      {Object.keys(response).map(item => (
       
       <div className="Article-block" key={item}>
        <div >{response[item].title}</div><p>{response[item].article}</p>
          
          </div>
           
        ))}
        <Comment  articleId={this.state.articleId}/>
      </ul>
      <div className="comment-title" >Comments</div>
      <div >
      <ul >
      {Object.keys(response1).map(item => (
        <div className="Comment-block" key={item}>
       <div className="PP">user:{response1[item].userid}</div> <p>{response1[item].comment}</p>
       <div className="Pd">{response1[item].post_date}</div>   
          </div>
           
        ))}
      </ul>
      </div>
      </div>
    );
   

  }
}
export default GetOneArticle