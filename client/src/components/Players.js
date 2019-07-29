import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
                <tr key={player._id}>
                    <td className="roster-listItem"><Link to={`/players/${this.props.match.params.teamId}/singlePlayer/${player._id}`}>{player.firstName} {player.lastName}</Link></td>
                    <td className="roster-listItem">{player.playerPosition}</td>
                    <td className="roster-listItem">{player.playerRanking}</td>
                    <td className="roster-listItem">{player.nflTeam}</td>
                </tr>
            )
        })
        return (
            <div className="container">
                <Link to={`/teams/${this.props.match.params.teamId}`}>Back to Team Page</Link>
                <div className="roster-list">
                    <h1 className="display-4">Roster Manager</h1>

                    <div className="roster-button">

                        <a class="waves-effect waves-light btn-large roster-button" href={`/players/${this.props.match.params.teamId}/new`}>Add New Player</a>
                    </div>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Position Ranking</th>
                                <th>NFL Team</th>
                            </tr>
                        </thead>
                        <tbody>
                            {playersList}
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}
