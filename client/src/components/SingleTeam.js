import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import Players from './Players'


export default class SingleTeam extends Component {

    state = {
        team: {},
        redirectToHome: false,
        isEditFormDisplayed: false
    }

    /* Step 4
    * Use componentDidMount to retrieve any data to display
    *   Here you can make calls to your local express server
    *   or to an external API
    *   setState can be run here as well
    *   -REMINDER remember `setState` it is an async function
    */
    
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

    handleToggleEditForm = () => {
        this.setState((state) => {
            return { isEditFormDisplayed: !state.isEditFormDisplayed }
        })
    }

    handleSubmit = () => {
        axios.put(`/api/teams/${this.state.team._id}`, this.state.team)
        .then((res) => {
            this.setState( {team: res.data, isEditFormDisplayed: false})
        })
    }

    handleInputChange = (event) => {
        const copiedTeam = { ...this.state.team }
        copiedTeam[event.target.name] = event.target.value
        this.setState({ team: copiedTeam })
    }

 
    render() {
        if (this.state.redirectToHome) {
            return <Redirect to="/teams" />
        }
        return (
            this.state.isEditFormDisplayed
                ?
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
                :
            <div>
                <h2>{this.state.team.name}</h2>
                <button onClick={this.handleToggleEditForm}>Edit Team</button>
                <button onClick={this.handleDeleteTeam}>Delete Team</button>
                <div>Platform: {this.state.team.platform}</div>
                <div>Scoring Format: {this.state.team.scoringFormat}</div>
                <div>Current Record: {this.state.team.record}</div>
                <img src={this.state.team.icon} alt="Team Icon" />
                {/* <Players teamId={this.state.team._id} /> */}
                {/* <Link to="/:teamId/players">Manage Roster</Link> */}
                <Link to={`/players/${this.state.team._id}`}>Manage Roster</Link>
            </div>
        )
    }
}
