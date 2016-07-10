const socket = function (io) {
    io.on("connection", (socket) => {
        let session = socket.request.session
        let rooms = getRooms(socket)
        
        if (session.player) {
            console.log("IN :: " + session.player.name)
            if (isAvailableRoom(rooms, socket, io, session)) {
                let room = getAvailableRoom(rooms, socket, io, session)
                
                socket.leave(socket.id)
                socket.join(room.id)

                io.sockets.in(room.id).emit("game", {
                    id: room.id,
                    players: getPlayers(room, socket, io)
                })
            }

            socket.on("disconnect", () => {
                console.log("OUT :: " + session.player.name)
            })
        }
    })
}

function getRooms (socket) {
    return Object.keys(socket.adapter.rooms).map((id) => {
        return {
            id: id,
            length: socket.adapter.rooms[id].length
        }
    })
}

function getAvailableRoom (rooms, socket, io, session) {
    return rooms.filter((room) => {
        return room.length === 1 && io.sockets.connected[Object.keys(socket.adapter.rooms[room.id].sockets)[0]].request.session.player.id !== session.player.id
    })[0]
}

function getPlayers (room, socket, io) {
    return (Object.keys(socket.adapter.rooms[room.id].sockets).map(socket => {
        return io.sockets.connected[socket].request.session.player
    }))
}

function isAvailableRoom (rooms, socket, io, session) {
    return rooms.some((room) => {
        return room.length === 1 && io.sockets.connected[Object.keys(socket.adapter.rooms[room.id].sockets)[0]].request.session.player.id !== session.player.id
    })
}

module.exports = socket
