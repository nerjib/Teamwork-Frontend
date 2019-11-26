import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Home from './Home'
import GetOneArticle from './GetOneArticle'
import withAuth from './withAuth';
import withAuth2 from './withAuth2';



import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1> TeamWork</h1>
      </header>
     
      
        
      <div>
      
        <Switch>
        <Route path="/" exact component={(Login)} />
          <Route path="/login" exact component={Login} />
          <Route path="/home" component={withAuth2(Home)} />
          <Route path="/articles/:id" component={(GetOneArticle)} />
          <Route path="/feeds" component={(Home)} />

        </Switch>
      </div>
 
      
    </div>
    
  );
}

export default App;
