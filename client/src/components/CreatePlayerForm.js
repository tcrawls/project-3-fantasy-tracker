import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


export default class CreatePlayerForm extends Component {

    state = {
        player: {
            firstName: '',
            lastName: '',
            playerPosition: '',
            playerRanking: '',
            nflTeam: '',
            teamId: this.props.teamId
        },
        redirectToHome: false
    }

    handleInputChange = (event) => {
        const copiedPlayer = { ...this.state.player }
        copiedPlayer[event.target.name] = event.target.value
        this.setState({ player: copiedPlayer })
    }

    handleSubmit = () => {
        axios.post(`/api/teams/${this.props.teamId}/players`, this.state.player)
            .then(() => {
                this.setState({ redirectToHome: true })
            })
    }


    render() {
        if (this.state.redirectToHome) {
            return <Redirect to="/" />
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" id="firstName" name="firstName" onChange={this.handleInputChange} value={this.state.player.firstName} />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" id="lastName" name="lastName" onChange={this.handleInputChange} value={this.state.player.lastName} />
                </div>
                <div>
                    <label htmlFor="playerPosition">Position: </label>
                    <input type="text" id="playerPosition" name="playerPosition" onChange={this.handleInputChange} value={this.state.player.playerPosition} />
                </div>
                <div>
                    <label htmlFor="playerRanking">Ranking: </label>
                    <input type="text" id="playerRanking" name="playerRanking" onChange={this.handleInputChange} value={this.state.player.playerRanking} />
                </div>
                <div>
                    <label htmlFor="nflTeam">NFL Team: </label>
                    <input type="text" id="nflTeam" name="nflTeam" onChange={this.handleInputChange} value={this.state.player.nflTeam} />
                </div>
                <input type="submit" value="Add Player" />
            </form>
        )
    }
}