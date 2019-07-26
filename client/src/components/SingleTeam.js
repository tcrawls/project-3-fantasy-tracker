import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import { Jumbotron, ListGroup } from 'react-bootstrap'
import BgImage from '../background-image-field.jpg'
import { Button } from 'react-bootstrap';

import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'



export default class SingleTeam extends Component {

    state = {
        team: {},
        redirectToHome: false,
        players: []
    }

    componentDidMount() {
        axios.get(`/api/teams/${this.props.match.params.teamId}`)
            .then((res) => {
                this.setState({ team: res.data })
                axios.get(`/api/players/${this.props.match.params.teamId}/roster`)
                    .then((response) => {
                        this.setState({ players: response.data })
                    })
            })
    }

    handleDeleteTeam = () => {
        axios.delete(`/api/teams/${this.state.team._id}`)
            .then(() => {
                this.setState({ redirectToHome: true })
            })
    }

    render() {
        let playersList = this.state.players.map((player) => {
            return (
                <tr key={player._id}>
                    <td>{player.firstName} {player.lastName}</td>
                    <td>{player.playerPosition}</td>
                    <td>{player.nflTeam}</td>
                </tr>
            )
        })

        if (this.state.redirectToHome) {
            return <Redirect to="/teams" />
        }
        return (

            <div>
                <Jumbotron style={{
                    backgroundImage: `url(${BgImage})`,
                    backgroundSize: 'cover',
                    color: 'white'
                }}>
                    <div className="team-header">
                        <div className="team-col-one">
                            <div><img className="teamPage-icon rounded-circle" src={this.state.team.icon} alt="Team Icon" /></div>
                            <div className="rounded float-left display-4">{this.state.team.name}</div>
                        </div>
                        <div className="team-col-two">
                            <div className="lead text"><b>Current Record:</b> {this.state.team.record}</div>
                            <div className="lead text"><b>Scoring Format:</b> {this.state.team.scoringFormat}</div>
                            <div className="lead text"><b>Platform:</b> {this.state.team.platform}</div>
                            <div><Button href={`/teams/${this.state.team._id}/edit`} variant="primary">Edit Team Info</Button></div>
                            <div><Button onClick={this.handleDeleteTeam} variant="secondary">Delete Team</Button></div>
                        </div>
                    </div>
                </Jumbotron>


                <h2>Current Roster</h2>
                <Button href={`/players/${this.state.team._id}/roster`} variant="secondary">Go To Roster Manager</Button>

                <table className="table">
                    {/* <thread>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Review</th>
                        </tr>
                    </thread> */}
                    <tbody>
                        
                        {playersList}
                        
                    </tbody>
                </table>
            </div>



            // <div>
            //     <h2>{this.state.team.name}</h2>
            //     <Link to={`/teams/${this.state.team._id}/edit`}>Edit Team</Link>
            //     <button onClick={this.handleDeleteTeam}>Delete Team</button>
            //     <div>Platform: {this.state.team.platform}</div>
            //     <div>Scoring Format: {this.state.team.scoringFormat}</div>
            //     <div>Current Record: {this.state.team.record}</div>
            //     <div>
            // <Link to={`/players/${this.state.team._id}/roster`}>Manage Roster</Link>
            //     </div>
            //     <img src={this.state.team.icon} alt="Team Icon" />
            // </div>

        )
    }
}
