import React, { Component } from 'react';
import { green, visible } from 'ansi-colors';
import './Home.css';
import ArcticleList from './ArticleList'
import PostArticle from './PostArticle';




export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Loading...',
      message2: 'ddd'
    }
  }
  
  componentDidMount() {
  
    fetch('/api/v1/articles')
      .then(res => res.json())
      .then(res => this.setState({message: res.rows}));
      fetch('/api/v1/articles/2')
      .then(res => res.text())
      .then(res => this.setState({message2: res}));
  
     
  }

  
    render() {
 
    return (
      <div className='container'>
        <div className="Menu-block">
          Board
          <div className="Menu-list">
          <li >private message</li>
          <li >Current Sprint</li>
          </div>
        </div>
      <div className="Articles-block">
        <ArcticleList Amessage={this.state.message}/>
      </div>
        <div className="Search-block">
         </div>
         <div className='Post-article' >
         <  PostArticle/>
           </div>
      </div>
    );
  }
}