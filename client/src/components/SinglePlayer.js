import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'


export default class SinglePlayer extends Component {

    state = {
        player: {},
        redirectToHome: false,
        redirectToEdit: false
    }

    componentDidMount() {
        axios.get(`/api/players/singlePlayer/${this.props.match.params.playerId}`)
            .then((res) => {
                this.setState({ player: res.data })
            })
    }

    handleDeletePlayer = (event) => {
        event.preventDefault()
        axios.delete(`/api/players/delete/${this.props.match.params.playerId}`)
            .then((res) => {
                this.setState({ player: res.data, redirectToHome: true })
            })
    }

    render() {
        if (this.state.redirectToHome) {
            return <Redirect to={`/players/${this.state.player.teamId}/roster`} />
        }
        return (
            <div>
                <h2>Single Player Page</h2>

                <h2>{this.state.player.firstName} {this.state.player.lastName}</h2>
                <Link to={`/players/${this.state.player.teamId}/singlePlayer/${this.props.match.params.playerId}/edit`}>Edit Player</Link>
                {/* <button onClick={this.handleEditPlayer}>Edit Player</button> */}
                <button onClick={this.handleDeletePlayer}>Delete Player</button>
                <div>NFL Team: {this.state.player.nflTeam}</div>
                <div>Position: {this.state.player.playerPosition}</div>
                <div>Ranking: {this.state.player.playerRanking}</div>
                <img src={this.state.player.playerImage} alt="Player Image" />
                {/* <Players teamId={this.state.team._id} /> */}
                {/* <Link to="/:teamId/players">Manage Roster</Link> */}

            </div>
        )
    }
}

