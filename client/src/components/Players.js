import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CreatePlayerForm from './CreatePlayerForm'

export default class Players extends Component {

    state = {
        players: [],
    }

    /* Step 4
    * Use componentDidMount to retrieve any data to display
    *   Here you can make calls to your local express server
    *   or to an external API
    *   setState can be run here as well
    *   -REMINDER remember `setState` it is an async function
    */

    componentDidMount() {
        axios.get(`/api/players/${this.props.match.params.teamId}/roster`)
            .then((res) => {
                this.setState({ players: res.data })
            })
    }

    render() {

        let playersList = this.state.players.map((player) => {
            return (
                <div key={player._id}>
                    <Link key={player._id} to={`/players/${this.props.match.params.teamId}/singlePlayer/${player._id}`}>{player.firstName} {player.lastName}</Link>
                </div>
            )
        })

        return (
                <div>
                    <h2>Roster</h2>
                    <Link to={`/players/${this.props.match.params.teamId}/new`}>Add New Player</Link>
                    {playersList}
                </div>
        )
    }
}
