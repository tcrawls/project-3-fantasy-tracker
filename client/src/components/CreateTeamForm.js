import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


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

    handleSubmit = () => {
        axios.post('/api/teams', this.state.team)
            .then(() => {
                this.setState({ redirectToHome: true })
            })
    }


    render() {
        if (this.state.redirectToHome) {
            return <Redirect to="/teams" />
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="team-name">Team Name: </label>
                    <input type="text" id="team-name" name="name" onChange={this.handleInputChange} value={this.state.team.name} />
                </div>
                <div>
                    <label htmlFor="platform">Platform: </label>
                    <input type="text" id="platform" name="platform" onChange={this.handleInputChange} value={this.state.team.platform} />
                </div>
                <div>
                    <label htmlFor="scoringFormat">Scoring Format: </label>
                    <input type="text" id="scoringFormat" name="scoringFormat" onChange={this.handleInputChange} value={this.state.team.scoringFormat} />
                </div>
                <div>
                    <label htmlFor="record">Current Record: </label>
                    <input type="string" id="record" name="record" onChange={this.handleInputChange} value={this.state.team.record} />
                </div>
                <div>
                    <label htmlFor="icon">Icon Image: </label>
                    <input type="text" id="icon" name="icon" onChange={this.handleInputChange} value={this.state.team.icon} />
                </div>
                <input type="submit" value="Create Team" />
            </form>
        )
    }
}