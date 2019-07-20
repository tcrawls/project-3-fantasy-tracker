import React, { Component } from 'react'
import axios from 'axios'
// import SingleTeam from './SingleTeam'
import { Link } from 'react-router-dom'

export default class Teams extends Component {

    state = {
        teams: []
    }

    /* Step 4
    * Use componentDidMount to retrieve any data to display
    *   Here you can make calls to your local express server
    *   or to an external API
    *   setState can be run here as well
    *   -REMINDER remember `setState` it is an async function
    */

    componentDidMount() {
        axios.get('/api/teams')
            .then((res) => {
                this.setState({ teams: res.data })
            })
    }


    render() {
        let teamsList = this.state.teams.map((team) => {
            return (
                <div key={team._id}>
                    <Link key={team._id} to={`/teams/${team._id}`}>{team.name}</Link>
                </div>
            )
        })

        return (
            <div>
                <h2>Teams List</h2>
                {teamsList}
            </div>
        )
    }
}
