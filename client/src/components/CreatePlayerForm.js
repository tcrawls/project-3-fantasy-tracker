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
            playerImage: '',
            nflTeam: '',
            teamId: this.props.match.params.teamId
        },
        redirectToHome: false
    }

    handleInputChange = (event) => {
        const copiedPlayer = { ...this.state.player }
        copiedPlayer[event.target.name] = event.target.value
        this.setState({ player: copiedPlayer })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/players', this.state.player)
            .then((res) => {
                this.setState({ 
                    player: res.data,
                    redirectToHome: true 
                })
            })
    }


    render() {
        if (this.state.redirectToHome) {
            return <Redirect to="/teams" />
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
                <div>
                    <label htmlFor="playerImage">Image Link: </label>
                    <input type="text" id="playerImage" name="playerImage" onChange={this.handleInputChange} value={this.state.player.playerImage} />
                </div>
                <input type="submit" value="Add Player" />
            </form>
        )
    }
}