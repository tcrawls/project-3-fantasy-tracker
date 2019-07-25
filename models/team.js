const mongoose = require('./connection.js')

const TeamSchema = new mongoose.Schema({
  name: String,
  platform: String,
  scoringFormat: String,
  record: String,
  icon: String
})

const TeamCollection = mongoose.model('Team', TeamSchema)


// TEAM MODEL FUNCTIONS

function getAllTeams() {
  return TeamCollection.find()
}

function getTeam(teamId) {
  return TeamCollection.findById(teamId)
}

function addNewTeam(teamObject) {
  return TeamCollection.create(teamObject)
}

function updateTeam(teamId, updatedTeam) {
  return TeamCollection.findByIdAndUpdate(teamId, updatedTeam, { new: true })
}

function deleteTeam(teamId) {
  return TeamCollection.findByIdAndDelete(teamId)
}


module.exports = {
  getAllTeams,
  getTeam,
  addNewTeam,
  updateTeam,
  deleteTeam
}
