const socket = function (io) {
    io.on("connection", (socket) => {
        let session = socket.request.session
        let rooms = Object.keys(socket.adapter.rooms).map((id) => {
            return {
                id: id,
                length: socket.adapter.rooms[id].length
            }
        })
        
        if (session.player) {
            console.log("IN :: " + session.player.name)
            if (rooms.some((room) => room.length === 1 && io.sockets.connected[Object.keys(socket.adapter.rooms[room.id].sockets)[0]].request.session.player.id !== session.player.id)) {
                let room = rooms.filter(room => room.length === 1 && io.sockets.connected[Object.keys(socket.adapter.rooms[room.id].sockets)[0]].request.session.player.id !== session.player.id)[0]
                
                socket.leave(socket.id)
                socket.join(room.id)
                
                console.log(socket.adapter.rooms[room.id])
                for (let socketId in socket.adapter.rooms[room.id].sockets)
                    console.log(io.sockets.connected[socketId].request.session.player.name)
            }

            socket.on("disconnect", () => {
                console.log("OUT :: " + session.player.name)
            })
        }
    })
}

module.exports = socket
