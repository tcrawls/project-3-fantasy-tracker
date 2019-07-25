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



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/teams">Fantasy Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#">Scoreboard</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* <nav>
          <div class="nav-wrapper">
            <Link to="/teams">Fantasy Tracker</Link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><Link to="#">About</Link></li>
              <li><Link to="#">Scoreboard</Link></li>
            </ul>
          </div>
        </nav> */}

        {/* <div><Link to="/teams">Home</Link></div>
        <div><Link to="#">About</Link></div>
        <h1>Fantasy Tracker</h1> */}
        <Switch>
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
