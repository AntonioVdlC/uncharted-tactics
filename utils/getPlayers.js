const getPlayers = function (room, sockets) {
    return Object.keys(room.sockets).map(socket => {
        return sockets.connected[socket].request.session.player
    })
}

module.exports = getPlayers
