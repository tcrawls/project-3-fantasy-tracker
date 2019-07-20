import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Teams from './components/Teams.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <div>Home</div>
      <div>About</div>
      <h1>Fantasy Tracker</h1>
      <Router>
        <Switch>
          <Route exact path="/" component={Teams} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
