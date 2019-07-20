/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */
/* Step 1
 *
 * TODO: import mongoose connection
 */
const mongoose = require('./connection.js')

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 */

 const TeamSchema = new mongoose.Schema({
    name: String,
    platform: String,
    format: String,
    imgLink: String
})

/* Step 3
 *
 * TODO: create collection API
 */

 const TeamCollection = mongoose.model('Team', TeamSchema)


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

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllTeams,
  getTeam,
  addNewTeam,
  updateTeam,
  deleteTeam
}
