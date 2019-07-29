import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import { Jumbotron } from 'react-bootstrap'
import BgImage from '../background-image-field.jpg'
import { Button } from 'react-bootstrap';


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
                    <td className="roster-listItem">{player.firstName} {player.lastName}</td>
                    <td className="roster-listItem">{player.playerPosition}</td>
                    <td className="roster-listItem">{player.playerRanking}</td>
                    <td className="roster-listItem">{player.nflTeam}</td>
                </tr>
            )
        })
        if (this.state.redirectToHome) {
            return <Redirect to="/teams" />
        }
        return (
            <div>
                <Link to={`/teams`}>Back to Teams</Link>
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
                            <div className="team-button-container">
                                <div className="team-button"><Button href={`/teams/${this.state.team._id}/edit`} variant="primary">Edit Team Info</Button></div>
                                <div className="team-button"><Button onClick={this.handleDeleteTeam} variant="secondary">Delete Team</Button></div>
                            </div>

                        </div>
                    </div>
                </Jumbotron>
                <div className="roster-list">
                    <div className="roster-button">
                        <a class="waves-effect waves-light btn-large roster-button" href={`/players/${this.state.team._id}/roster`}>Go To Roster Manager</a>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Position Ranking</th>
                                <th>NFL Team</th>
                            </tr>
                        </thead>
                        <tbody>
                            {playersList}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
