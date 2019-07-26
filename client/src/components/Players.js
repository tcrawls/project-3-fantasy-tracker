import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { ListGroup } from 'react-bootstrap';

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
                    <tr>
                        <td><Link key={player._id} to={`/players/${this.props.match.params.teamId}/singlePlayer/${player._id}`}>{player.firstName} {player.lastName}</Link></td>
                        <td>{player.nflTeam}</td>
                        <td>{player.playerPosition}</td>
                        <td>{player.playerRanking}</td>
                    </tr>
                </div>
            )
        })
        return (
            <div className="container">
                <h2>Roster</h2>
                <Link to={`/players/${this.props.match.params.teamId}/new`}>Add New Player</Link>
                <table className="table">
                    <thread>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Position</th>
                            <th>NFL Team</th>
                            <th>Current Ranking</th>
                        </tr>
                    </thread>
                    <tbody>
                        {playersList}
                    </tbody>
                </table>
            </div>
        )
    }
}
