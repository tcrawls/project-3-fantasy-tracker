/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const playerApi = require('../models/player.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const playerRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 */
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


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  playerRouter
}
