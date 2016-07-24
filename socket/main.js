const config = {
    field: require("../config/field"),
    pieces: require("../config/pieces")
}

const getRandomElementFrom = require("../utils/getRandomElementFromArray")

const getPlayers = require("./getPlayers")
const getRooms = require("./getRooms")
const generateField = require("./generateField")
const isAvailableRoom = require("./isAvailableRoom")
const updateField = require("./updateField")

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

                sockets[socket.id].room = room.id
                sockets[room.id].room = room.id

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
                    ),
                    sockets: [
                        room.id,
                        socket.id
                    ],
                    kings: [],
                    initialPositions: [],
                    turn: 0
                }

                games[room.id] = game

                games[sockets[socket.id].room].sockets.forEach((socket) => {
                    sockets[socket].emit("game", {
                        players: game.players,
                        field: game.field,
                        captured: game.field.captured
                    })
                })
            }

            socket.on("king", (data) => {
                let room = sockets[socket.id].room
                let position = data.position

                let kings = games[room].kings
                let field = games[room].field

                kings.push(position)
                
                field = updateField(field, {
                    type: "move", 
                    piece: "King",
                    player: (games[room].sockets.indexOf(socket.id) + 1 === 1) ? 2 : 1,
                    start: null, 
                    end: position
                })

                if (kings.length === 2) {
                    games[room].sockets.forEach((socket) => {
                        sockets[socket].emit("king", {
                            field: field,
                            captured: field.captured
                        })
                    })
                }
            })

            socket.on("initial", (data) => {
                let room = sockets[socket.id].room
                let field = games[room].field

                let initialPositions = games[room].initialPositions

                field = updateField(field, {
                    type: "initial",
                    pieces: data.pieces,
                    player: games[room].sockets.indexOf(socket.id) + 1
                })

                initialPositions.push(socket.id)

                if (initialPositions.length === 2) {
                    games[room].sockets.forEach((socket) => {
                        sockets[socket].emit("turn", {
                            turn: 1,
                            field: field,
                            captured: field.captured
                        })
                    })
                }
            })

            socket.on("turn", (data) => {
                let type = data.type
                let piece = data.piece 
                let start = data.start
                let end = data.end

                let turn = ++ games[room].turn

                field = updateField(field, {
                    type: type, 
                    piece: piece,
                    player: games[room].sockets.indexOf(socket.id) + 1,
                    start: start, 
                    end: end
                })

                games[room].sockets.forEach((socket) => {
                    sockets[socket].emit("turn", {
                        turn: turn,
                        field: field,
                        captured: field.captured
                    })
                })
            })

            socket.on("disconnect", () => {
                console.log("OUT :: " + socket.request.session.player.name)
                
                delete sockets[socket.id]
            })
        }
    })
}

module.exports = socket
