import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


export default class EditTeamForm extends Component {

    state = {
        team: {
            name: '',
            platform: '',
            scoringFormat: '',
            record: '',
            icon: ''
        },
        redirectToTeamPage: false
    }

    componentDidMount() {
        axios.get(`/api/teams/${this.props.match.params.teamId}`)
            .then((res) => {
                this.setState({ team: res.data })
            })
    }

    handleInputChange = (event) => {
        const copiedTeam = { ...this.state.team }
        copiedTeam[event.target.name] = event.target.value
        this.setState({ team: copiedTeam })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.put(`/api/teams/${this.props.match.params.teamId}`, this.state.team)
            .then((res) => {
                this.setState({
                    player: res.data,
                    redirectToTeamPage: true
                })
            })
    }

    render() {
        if (this.state.redirectToTeamPage) {
            return <Redirect to={`/teams/${this.props.match.params.teamId}`} />
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
                <input type="submit" value="Update Team" />
            </form>
        )
    }
}