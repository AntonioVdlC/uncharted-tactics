const getRooms = function (sockets, rooms, session) {
    return Object.keys(rooms).map((id) => {
        return {
            id: id,
            length: rooms[id].length,
            currentPlayerIsOwner: sockets.connected[Object.keys(rooms[id].sockets)[0]].request.session.player.id === session.player.id
        }
    })
}

module.exports = getRooms
