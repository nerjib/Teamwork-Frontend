import React from 'react'
import GetOneArticle from './GetOneArticle';


import { Redirect } from 'react-router-dom'
import { Component } from 'react';
import './ArticleList.css';
import { Link, Route, Switch } from 'react-router-dom';





export default class ArticleList extends React.Component{
   

  render(){
   return (
     <div >
         
   
     <ul>
     {Object.keys(this.props.Amessage).map(item => (
       <div className="Article-block" key={item}>
       <div className="profile">user: {this.props.Amessage[item].userid}</div>
       <div className="Article-title">{this.props.Amessage[item].title}</div>

        <div className="Article-main">{this.props.Amessage[item].article}</div>
         <br/><Link className="view" to={`/articles/${this.props.Amessage[item].id}`} >view
         </Link> <Link className="comment" to={`/articles/${this.props.Amessage[item].id}`}>comments</Link>
              <div>{this.props.Amessage[item].createdon}</div>
 
         </div>
          
       ))}
     </ul>
     </div>
   );
       }
       }
       