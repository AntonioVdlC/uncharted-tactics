const getPlayers = function (room, sockets) {
    return Object.keys(room.sockets).map(id => {
        let player = sockets[id].request.session.player 
        return {
            id: player.id,
            name: player.name,
            level: player.level,
            ranking: player.ranking
        }
    })
}

module.exports = getPlayers
