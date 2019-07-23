import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Teams from './components/Teams.js'
import SingleTeam from './components/SingleTeam.js'
import Players from './components/Players.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div><Link to="/">Home</Link></div>
        <div><Link to="#">About</Link></div>
        <h1>Fantasy Tracker</h1>
        <Switch>
          <Route exact path="/" component={Teams} />
          <Route path="/:teamId" component={SingleTeam} />
          <Route path="/:teamId/players" component={Players} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
