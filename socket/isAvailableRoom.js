const isAvailableRoom = function (room) {
    return room.length === 1 && !room.currentPlayerIsOwner 
}

module.exports = isAvailableRoom
