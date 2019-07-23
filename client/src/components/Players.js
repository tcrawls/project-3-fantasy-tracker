import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CreatePlayerForm from './CreatePlayerForm'

export default class Players extends Component {

    state = {
        players: [],
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
        axios.get('/api/teams/:teamId/players')
            .then((res) => {
                this.setState({ players: res.data })
            })
    }

    handleToggleCreateForm = () => {
        this.setState((state) => {
            return { isNewFormDisplayed: !state.isNewFormDisplayed }
        })
    }


    render() {
        // let playerArray = this.state.players.filter((player) => {
        //     return player.teamId === this.props.teamId
        // })

        // let playersList = playerArray.map((player) => {
        //     return (
        //         <div key={player._id}>
        //             <Link key={player._id} to={`/players/${player._id}`}>{player.firstName} {player.lastName}</Link>
        //         </div>
        //     )
        // })


        let playersList = this.state.players.map((player) => {
            return (
                <div key={player._id}>
                    <Link key={player._id} to={`/players/${player._id}`}>{player.firstName} {player.lastName}</Link>
                </div>
            )
        })

        return (
            this.state.isNewFormDisplayed
            ?
            <CreatePlayerForm teamId={this.props.teamId} />
            :
                <div>
                    <h2>Roster</h2>
                    <button onClick={this.handleToggleCreateForm}>Add New Player</button>
                    {playersList}
                </div>
        )
    }
}
