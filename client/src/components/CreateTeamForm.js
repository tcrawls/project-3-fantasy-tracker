import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


export default class CreateTeamForm extends Component {

    state = {
        team: {
            name: '',
            platform: '',
            scoringFormat: '',
            record: 0,
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
            .then(() => {
                this.setState({
                    redirectToHome: true
                })
            })
    }


    render() {
        if (this.state.redirectToHome) {
            console.log('redirect to home is true')
            return <Redirect to="/" />
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
                <input type="submit" value="Create Team" />
            </form>
        )
    }
}