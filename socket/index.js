const config = {
    field: require("../config/field")
}

const getPlayers = require("../utils/getPlayers")
const getRandomElementFrom = require("../utils/getRandomElementFromArray")
const getRooms = require("../utils/getRooms")
const generateField = require("../utils/generateField")
const isAvailableRoom = require("../utils/isAvailableRoom")

const games = {}
const sockets = {}

const socket = function (io) {
    io.on("connection", (socket) => {
        if (socket.request.session.player) {
            console.log("IN :: " + socket.request.session.player.name)

            sockets[socket.id] = socket

            let session = socket.request.session
            let rooms = getRooms(sockets, socket.adapter.rooms, session)

            if (rooms.some(isAvailableRoom)) {
                let room = rooms.filter(isAvailableRoom)[0]

                socket.leave(socket.id)
                socket.join(room.id)

                let game = {
                    room: room.id,
                    players: getPlayers(
                        socket.adapter.rooms[room.id], 
                        sockets
                    ),
                    field: generateField(
                        config.field.length,
                        config.field.width,
                        config.field.tileTypes,
                        getRandomElementFrom
                    )
                }

                sockets[socket.id].room = room.id
                sockets[room.id].room = room.id

                io.sockets.in(room.id).emit("game", {
                    players: game.players,
                    field: game.field
                })

                games[room.id] = game
                games[room.id].kings = []
            }

            socket.on("king", (data) => {
                let room = sockets[socket.id].room
                let position = data.position

                let kings = games[room].kings

                kings.push(position)
                
                if (kings.length === 2)
                    io.sockets.in(room).emit("king", kings)
            })

            socket.on("disconnect", () => {
                console.log("OUT :: " + socket.request.session.player.name)
                
                delete sockets[socket.id]
            })
        }
    })
}

module.exports = socket
