const express = require('express')
const playerApi = require('../models/player.js')
const playerRouter = express.Router()


// PLAYER REQUEST HANDLERS:

playerRouter.get('/:teamId/roster', (req, res) => {
  playerApi.getPlayersByTeamId(req.params.teamId)
    .then((players) => {
      res.json(players)
    })
})

playerRouter.get('/singlePlayer/:playerId', (req, res) => {
  playerApi.getSinglePlayer(req.params.playerId)
    .then((player) => {
      res.json(player)
    })
})

playerRouter.post('/', (req, res) => {
  playerApi.addNewPlayer(req.body)
    .then((player) => {
      res.json(player)
    })
})

playerRouter.put('/edit/:playerId', (req, res) => {
  playerApi.updatePlayer(req.params.playerId, req.body)
    .then((player) => {
      res.json(player)
    })
})

playerRouter.delete('/delete/:playerId', (req, res) => {
  playerApi.deletePlayer(req.params.playerId)
    .then((player) => {
      res.json(player)
    })
})

module.exports = {
  playerRouter
}
