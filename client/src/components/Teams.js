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
                <div key={team._id}>
                    <ListGroup.Item>
                        <Link key={team._id} to={`/teams/${team._id}`}>{team.name}</Link>
                    </ListGroup.Item>
                </div>
            )
        })

        return (

            <div>
                <Jumbotron style={{ backgroundImage: `url(${BgImage})`, backgroundSize: 'cover' }}>
                        <h1 className="ml-1">Fantasy Tracker</h1>
                    <p>Manage your fantasy rosters. Optimize your lineups. Track player performance. All in one place.</p>
                    <p>
                        <Button variant="primary" href='/teams/new'>Create New Team</Button>
                    </p>
                </Jumbotron>

                <h2>Teams List</h2>
                <ListGroup>
                    {teamsList}
                </ListGroup>
            </div>
        )
    }
}
