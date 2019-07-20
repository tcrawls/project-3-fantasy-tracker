import React, { Component } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'

export default class SingleTeam extends Component {

    state = {
        team: {}
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

 
    render() {
        return (
            <div>
                <h2>{this.state.team.name}</h2>
                <div>{this.state.team.record}</div>
                <div>{this.state.team.platform}</div>
                <div>{this.state.team.scoringFormat}</div>
            </div>
        )
    }
}
