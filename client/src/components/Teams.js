import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Jumbotron } from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';


import LogoImage from '../background-image-field.jpg'

var sectionStyle = {
    backgroundImage: `url(${LogoImage})`
}

export default class Teams extends Component {

    state = {
        teams: [],
    }

    /* Step 4
    * Use componentDidMount to retrieve any data to display
    *   Here you can make calls to your local express server
    *   or to an external API
    *   setState can be run here as well
    *   -REMINDER remember `setState` it is an async function
    */

    componentDidMount() {
        axios.get('/api/teams')
            .then((res) => {
                this.setState({ teams: res.data })
            })
    }

    render() {
        let teamsList = this.state.teams.map((team) => {
            return (
                <div key={team._id}>
                    <ListGroup.Item>
                        <Link key={team._id} to={`/teams/${team._id}`}>{team.name}</Link>
                    </ListGroup.Item>
                </div>
            )
        })

        return (

            <div>
                <div style={sectionStyle}>
                    <Jumbotron className="Jumbotron">
                        <h1>Fantasy Tracker</h1>
                        <p>Manage your fantasy rosters. Optimize your lineups. Track player performance. All in one place.</p>
                        <p>
                            <Button variant="primary" href='/teams/new'>Create New Team</Button>
                        </p>
                    </Jumbotron>
                </div>
                <h2>Teams List</h2>
                <ListGroup>
                    {teamsList}
                </ListGroup>
            </div>
        )
    }
}
