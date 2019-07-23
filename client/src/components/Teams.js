import React, { Component } from 'react'
import axios from 'axios'
import CreateTeamForm from './CreateTeamForm'
import { Link } from 'react-router-dom'

export default class Teams extends Component {

    state = {
        teams: [],
        isNewFormDisplayed: false
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

    handleToggleCreateForm = () => {
        this.setState((state) => {
            return { isNewFormDisplayed: !state.isNewFormDisplayed }
        })
    }


    render() {
        let teamsList = this.state.teams.map((team) => {
            return (
                <div key={team._id}>
                    <Link key={team._id} to={`/${team._id}`}>{team.name}</Link>
                </div>
            )
        })

        return (
            this.state.isNewFormDisplayed
                ?
                <CreateTeamForm />
                :
                <div>
                    <h2>Teams List</h2>
                    <button onClick={this.handleToggleCreateForm}>Create New Team</button>
                    {teamsList}
                </div>
        )
    }
}
