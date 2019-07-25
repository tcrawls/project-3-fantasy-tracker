const express = require('express')
const teamApi = require('../models/team.js')
const teamRouter = express.Router()


// TEAM REQUEST HANDLERS:

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

module.exports = {
  teamRouter
}
