import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Jumbotron } from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import BgImage from '../background-image-field.jpg'

export default class Teams extends Component {

    state = {
        teams: [],
    }

    componentDidMount() {
        axios.get('/api/teams')
            .then((res) => {
                this.setState({ teams: res.data })
            })
    }

    render() {
        let teamsList = this.state.teams.map((team) => {
            return (
                // <div key={team._id}>
                    <ListGroup.Item>
                        <img className="icon rounded-circle" src={team.icon} alt="Team Icon" />
                        <td className="team-name"><Link key={team._id} to={`/teams/${team._id}`}>{team.name}</Link></td>
                        <td>Record: {team.record}</td>
                        <td>Platform: {team.platform}</td>
                        <td>Format: {team.scoringFormat}</td>
                        <a class="waves-effect waves-light btn view-team" href={`/teams/${team._id}`}>View Team Page</a>
                    </ListGroup.Item>
                // </div>
            )
        })

        return (
            <div>
                <div>
                    <Jumbotron style={{
                        backgroundImage: `url(${BgImage})`,
                        backgroundSize: 'cover',
                        color: 'white',
                        textAlign: 'center',
                    }}
                    >
                        <h1 className="display-4">Fantasy Tracker</h1>
                        <p className="lead">Manage your fantasy rosters. Track player performance. All in one place.</p>
                        <a class="waves-effect waves-light btn-large" href='/teams/new'>Create New Team</a>
                    </Jumbotron>
                </div>
                <div>
                    <ListGroup>
                    <h3>Current Teams:</h3>
                        {teamsList}
                    </ListGroup>
                </div >
            </div>
        )
    }
}
