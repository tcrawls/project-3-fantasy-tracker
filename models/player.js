/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require('./connection.js')

/* Step 1 alternative
 *
 * TODO: make a global variable to act as an in memory database. 
 * NOTE: doing this WILL NOT persist your data and you will loose
 * your data once you stop running your server.
 *
 */
// global.sampleModel = [];

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const PlayerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  playerPosition: String,
  playerRanking: Number,
  nflTeam: String,
  teamId: mongoose.Types.ObjectId
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const PlayerCollection = mongoose.model('Player', PlayerSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */

function getAllPlayers() {
  return PlayerCollection.find()
}

function getPlayersByTeamId(teamId) {
  return PlayerCollection.find({ teamId: teamId })
}

function getPlayerByPlayerId(playerId) {
  return PlayerCollection.findById(playerId)
}

function addNewPlayer(playerObject) {
  return PlayerCollection.create(playerObject)
}

function updatePlayer(playerId, updatedPlayer) {
  return PlayerCollection.findByIdAndUpdate(playerId, updatedPlayer, { new: true })
}

function deletePlayer(playerId) {
  return TeamCollection.findByIdAndDelete(playerId)
}


/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllPlayers,
  getPlayersByTeamId,
  getPlayerByPlayerId,
  addNewPlayer,
  updatePlayer,
  deletePlayer
}