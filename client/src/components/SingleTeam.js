import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'

export default class SingleTeam extends Component {

    state = {
        team: {},
        redirectToHome: false,
    }

    componentDidMount() {
        axios.get(`/api/teams/${this.props.match.params.teamId}`)
            .then((res) => {
                this.setState({ team: res.data })
            })
    }

    handleDeleteTeam = () => {
        axios.delete(`/api/teams/${this.state.team._id}`)
            .then(() => {
                this.setState({ redirectToHome: true })
            })
    }

    render() {
        if (this.state.redirectToHome) {
            return <Redirect to="/teams" />
        }
        return (
            <div>
                <h2>{this.state.team.name}</h2>
                <button onClick={this.handleToggleEditForm}>Edit Team</button>
                <Link to={`/teams/${this.state.team._id}/edit`}>Edit Team</Link>
                <button onClick={this.handleDeleteTeam}>Delete Team</button>
                <div>Platform: {this.state.team.platform}</div>
                <div>Scoring Format: {this.state.team.scoringFormat}</div>
                <div>Current Record: {this.state.team.record}</div>
                <div>
                    <Link to={`/players/${this.state.team._id}/roster`}>Manage Roster</Link>
                </div>
                <img src={this.state.team.icon} alt="Team Icon" />
                {/* <Players teamId={this.state.team._id} /> */}
                {/* <Link to="/:teamId/players">Manage Roster</Link> */}
            </div>
        )
    }
}
