import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


export default class EditPlayerForm extends Component {

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
        redirectToPlayerPage: false
    }

    componentDidMount() {
        axios.get(`/api/players/singlePlayer/${this.props.match.params.playerId}`)
            .then((res) => {
                this.setState({ player: res.data })
            })
    }

    handleInputChange = (event) => {
        const copiedPlayer = { ...this.state.player }
        copiedPlayer[event.target.name] = event.target.value
        this.setState({ player: copiedPlayer })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.put(`/api/players/edit/${this.props.match.params.playerId}`, this.state.player)
            .then((res) => {
                this.setState({
                    player: res.data,
                    redirectToPlayerPage: true
                })
            })
    }

    render() {
        if (this.state.redirectToPlayerPage) {
            return <Redirect to={`/players/${this.state.player.teamId}/singlePlayer/${this.props.match.params.playerId}`} />
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" id="firstName" name="firstName" onChange={this.handleInputChange} value={this.state.player.firstName} placeholder={this.state.player.firstName} />
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
                <input type="submit" value="Update Player" />
            </form>
        )
    }
}