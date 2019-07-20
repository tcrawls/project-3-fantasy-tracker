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
const teamApi = require('../models/team.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const teamRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */
teamRouter.get('/', (req, res) => {
  teamApi.getAllTeams()
    .then((teams) => {
      res.json(teams)
    })
})

teamRouter.get('/:teamId', (req, res) => {
  teamApi.getTeam(req.params.teamId)
    .then((team) => {
      res.json(team)
    })
})

teamRouter.post('/', (req, res) => {
  teamApi.addNewTeam(req.body)
    .then((team) => {
      res.json(team)
    })
})

teamRouter.put('/:teamId', (req, res) => {
  teamApi.updateTeam(req.params.teamId, req.body)
    .then((team) => {
      res.json(team)
    })
})

teamRouter.delete('/:teamId', (req, res) => {
  teamApi.deleteTeam(req.params.teamId)
    .then((team) => {
      res.json(team)
    })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  teamRouter
}
