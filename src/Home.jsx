import React, { Component } from 'react';
import { green, visible } from 'ansi-colors';
import './Home.css';
import ArcticleList from './ArticleList'
import PostArticle from './PostArticle';
import { Link, Route, Redirect } from 'react-router-dom';
import GifsList from './GifsList';



export default class Home extends Component {
  constructor() {
    super();
  
    const access = localStorage.getItem('login');
   

    
       this.state = {
      articlelist: 'Loading...',
      gifslist: 'Loading...',
      login: access,
      display: 'articles'
    }
    
    if(access !== 'pass'){
      this.setState({login: 'stop'})
    }
    
    this.handleArticles = this.handleArticles.bind(this);
    this.handleGifs = this.handleGifs.bind(this);

  }
  
  componentDidMount() {
  let  obj = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token'),
      }
    }
    fetch('https://powerful-garden-82332.herokuapp.com/api/v1/articles', obj)
      .then(res => res.json())
      .then(res => this.setState({articlelist: res.rows}));
           
      fetch('https://powerful-garden-82332.herokuapp.com/api/v1/gifs', obj)
      .then(res => res.json())
      .then(res => this.setState({gifslist: res.rows}));
      
  }

  handleGifs(){

this.setState({
  display: 'gifs'
});
  }
  handleArticles(){
    this.setState({
      display: 'articles'
    });
      }
  
    render() {
      if (this.state.login !== 'pass'){
      return <Redirect to='/login'></Redirect>
      };
      let displayBlock=''
     if (this.state.display === 'articles'){
displayBlock=  <ArcticleList Amessage={this.state.articlelist}/>;
     }
     else if( this.state.display=== 'gifs'){
displayBlock =<GifsList gifslist={this.state.gifslist}/>
     }
    return (
      <div className='container'>
        <div className="Menu-block">
          Board
          <div className="Menu-list">
           <div>
            <Link to="/create-user">Create user</Link>
            </div>
         <div> private message</div>
         <div> Current Sprint</div>
         <Link to="/signout">Signout</Link>
          </div>
        </div>
      <div className="Articles-block">
        <input type="button" onClick={this.handleGifs} value="Gifs"/> 
        <input type="button" onClick={this.handleArticles} value="Articles"/>

        {displayBlock}
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