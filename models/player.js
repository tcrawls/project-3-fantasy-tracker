const mongoose = require('./connection.js')

const PlayerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  playerPosition: String,
  playerRanking: Number,
  playerImage: String,
  nflTeam: String,
  teamId: mongoose.Types.ObjectId
})

const PlayerCollection = mongoose.model('Player', PlayerSchema)


// PLAYER MODEL FUNCTIONS:

function getAllPlayers() {
  return PlayerCollection.find()
}

function getPlayersByTeamId(teamId) {
  return PlayerCollection.find({ teamId: teamId })
}

function getSinglePlayer(playerId) {
  return PlayerCollection.findById(playerId)
}

function addNewPlayer(playerObject) {
  return PlayerCollection.create(playerObject)
}

function updatePlayer(playerId, updatedPlayer) {
  return PlayerCollection.findByIdAndUpdate(playerId, updatedPlayer, { new: true })
}

function deletePlayer(playerId) {
  return PlayerCollection.findByIdAndDelete(playerId)
}


module.exports = {
  getAllPlayers,
  getPlayersByTeamId,
  getSinglePlayer,
  addNewPlayer,
  updatePlayer,
  deletePlayer
}
