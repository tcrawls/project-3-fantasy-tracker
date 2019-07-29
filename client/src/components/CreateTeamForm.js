import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'


export default class CreateTeamForm extends Component {

    state = {
        team: {
            name: '',
            platform: '',
            scoringFormat: '',
            record: '',
            icon: ''
        },
        redirectToHome: false
    }

    handleInputChange = (event) => {
        const copiedTeam = { ...this.state.team }
        copiedTeam[event.target.name] = event.target.value
        this.setState({ team: copiedTeam })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/teams', this.state.team)
            .then((res) => {
                this.setState({
                    team: res.data,
                    redirectToHome: true
                })
            })
    }

    render() {
        if (this.state.redirectToHome) {
            return <Redirect to="/teams" />
        }
        return (
            <div className="form-body">
                <Link to={`/teams`}>Back to Teams</Link>
                <h1 className="display-4 create-title">Create New Team</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="create-team form-fields">
                        <div className="form-group">
                            <label htmlFor="team-name">Team Name: </label>
                            <input className="form-control" type="text" id="team-name" name="name" onChange={this.handleInputChange} value={this.state.team.name} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="platform">Platform: </label>
                            <select className="form-control" type="text" id="platform" name="platform" onChange={this.handleInputChange} value={this.state.team.platform}>
                                <option>--Select--</option>
                                <option>ESPN</option>
                                <option>Yahoo</option>
                                <option>NFL.com</option>
                                <option>CBS</option>
                                <option>Fox Sports</option>
                                <option>FanDuel</option>
                                <option>DraftKings</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="scoringFormat">Scoring Format: </label>
                            <select className="form-control" type="text" id="scoringFormat" name="scoringFormat" onChange={this.handleInputChange} value={this.state.team.scoringFormat}>
                                <option>--Select--</option>
                                <option>Standard</option>
                                <option>PPR</option>
                                <option>Half PPR</option>
                                <option>Custom</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="record">Current Record: </label>
                            <input className="form-control" type="string" id="record" name="record" onChange={this.handleInputChange} value={this.state.team.record} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="icon">Icon Image: </label>
                            <input className="form-control" type="text" id="icon" name="icon" onChange={this.handleInputChange} value={this.state.team.icon} />
                        </div>
                        <input type="submit" value="Create Team" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}