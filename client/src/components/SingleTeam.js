import React, { Component } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'

export default class SingleTeam extends Component {

    state = {
        team: {},
        redirectToHome: false
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

    handleDeleteTeam() {
        axios.delete(`/api/teams/${this.state.team._id}`)
            .then(() => {
                this.setState({ redirectToHome: true })
            })
    }

 
    render() {
        return (
            <div>
                <h2>{this.state.team.name}</h2>
                <button>Edit Team</button>
                <button onClick={this.handleDeleteTeam}>Delete Team</button>
                <div>Platform: {this.state.team.platform}</div>
                <div>Scoring Format: {this.state.team.scoringFormat}</div>
                <div>Current Record: {this.state.team.record}</div>
                <img src={this.state.team.icon} />
            </div>
        )
    }
}
