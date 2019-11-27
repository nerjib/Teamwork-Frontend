import React, { Component } from 'react';
import { green, visible } from 'ansi-colors';
import './Home.css';
import ArcticleList from './ArticleList'
import PostArticle from './PostArticle';
import { Link, Route, Redirect } from 'react-router-dom';




export default class Home extends Component {
  constructor() {
    super();
  
    const access = localStorage.getItem('login');
   

    
       this.state = {
      message: 'Loading...',
      message2: 'ddd',
      login: access,
    }
    
    if(access !== 'pass'){
      this.setState({login: 'stop'})
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
      if (this.state.login !== 'pass'){
      return <Redirect to='/login'></Redirect>
      };
     
 
    return (
      <div className='container'>
        <div className="Menu-block">
          Board
          <div className="Menu-list">
           <div>
            <Link to="/create-user">Create user</Link>
            </div>
          private message
          Current Sprint
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