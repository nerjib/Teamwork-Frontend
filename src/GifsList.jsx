import React from 'react'

import { Redirect } from 'react-router-dom'
import { Component } from 'react';
import './ArticleList.css';
import { Link, Route, Switch } from 'react-router-dom';





export default class GifsList extends React.Component{
   
  render(){
    const gifs= this.props.gifslist;

   return (
     <div >
         
   
     <ul>
     {Object.keys(gifs).map(item => (
       <div className="Article-block" key={item}>
       <div className="profile">user: {gifs[item].userid}</div>
       <div className="Article-title">{gifs.title}</div>

        <div className="Article-main"><img className = 'image' alt = {gifs[item].id} src= {gifs[item].gifurl}></img></div>
         <br/><Link className = "view" to={`/gifs/${gifs[item].id}`} >Fullview
         </Link> <Link className = "comment" to = {`/gifs/${gifs[item].id}`}>comments</Link>
              <div>{gifs[item].createdon}</div>
 
         </div>
          
       ))}
     </ul>
     </div>
   );
       }
       }
       