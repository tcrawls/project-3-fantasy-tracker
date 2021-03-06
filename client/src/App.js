import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Teams from './components/Teams.js'
import SingleTeam from './components/SingleTeam.js'
import Players from './components/Players.js'
import SinglePlayer from './components/SinglePlayer.js'
import CreateTeamForm from './components/CreateTeamForm.js'
import CreatePlayerForm from './components/CreatePlayerForm.js'
import EditPlayerForm from './components/EditPlayerForm.js'
import EditTeamForm from './components/EditTeamForm.js'
import './App.css'
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import HomePage from './components/HomePage'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Fantasy HQ</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#">Scoreboard</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/teams/new" component={CreateTeamForm} />
          <Route exact path="/teams/:teamId" component={SingleTeam} />
          <Route exact path="/teams/:teamId/edit" component={EditTeamForm} />
          <Route exact path="/players/:teamId/roster" component={Players} />
          <Route exact path="/players/:teamId/new" component={CreatePlayerForm} />
          <Route exact path="/players/:teamId/singlePlayer/:playerId" component={SinglePlayer} />
          <Route exact path="/players/:teamId/singlePlayer/:playerId/edit" component={EditPlayerForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
