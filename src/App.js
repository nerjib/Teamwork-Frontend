import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Home from './Home'



import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1> TeamWork</h1>
      </header>
     
      
        
      <div>
      
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/home" exact component={Home} />

        </Switch>
      </div>
 
      
    </div>
    
  );
}

export default App;
