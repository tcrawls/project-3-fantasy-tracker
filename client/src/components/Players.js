import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CreatePlayerForm from './CreatePlayerForm'

export default class Players extends Component {

    state = {
        players: [],
    }

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
