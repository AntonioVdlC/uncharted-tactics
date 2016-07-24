const renderField = require("./renderField")

const prepareFieldForPlacing = function (piece, field, playerNumber, socket) {
    let fieldLength = field.length
    let fieldWidth = field[0].length

    let $info = document.getElementById("info")

    if (piece.name === "King") {
        for (let i = 0; i < fieldLength; i++) {
            for (let j = 0; j < fieldWidth; j++) {
                let $tile = document.getElementById(i + "-" + j)
                
                if (
                    playerNumber === 1 && (i !== fieldLength - 1 || j === 0 || j === fieldWidth - 1) ||
                    playerNumber === 2 && (i !== 0 || j === 0 || j === fieldWidth - 1) 
                ) {
                    $tile.className += " forbidden"
                } else {
                    $tile.addEventListener("click", (e) => {
                        // Update the DOM`
                        field[i][j].piece = {
                            type: "King",
                            player: (playerNumber === 1) ? 2 : 1
                        }

                        document.getElementById("field").innerHTML = renderField(field)

                        // Emit socket message
                        socket.emit("king", {
                            position: {
                                i: i,
                                j: j
                            }
                        })

                        // Wait on rival placing king
                        $info.innerHTML = "Waiting on your rival to place your king ..."
                    })
                }
            }
        }
    } else {
        for (let i = 0; i < fieldLength; i++) {
            for (let j = 0; j < fieldWidth; j++) {
                let $tile = document.getElementById(i + "-" + j)
                
                if (
                    playerNumber === 1 && !(i === 0 || i === 1 || i === 2) || 
                    playerNumber === 2 && !(i === fieldLength - 1 || i === fieldLength - 2 || i === fieldLength - 3) ||
                    $tile.innerHTML || field[i][j].type === "river"
                ) {
                    if ($tile.className.indexOf("forbidden") === -1)    
                        $tile.className += " forbidden"
                } else {
                    $tile.addEventListener("click", (e) => {
                        field[i][j].piece = {
                            type: piece,
                            player: playerNumber
                        }

                        document.getElementById("field").innerHTML = renderField(field)

                        if (!document.querySelectorAll("#capture-player-" + playerNumber + " p").length) {
                            let pieces = []

                            field.forEach((row, i) => {
                                row.forEach((tile, j) => {
                                    if (tile.piece && tile.piece.type !== "King") {
                                        pieces.push({
                                            type: tile.piece.type,
                                            i: i,
                                            j: j
                                        })
                                    }
                                })
                            })

                            socket.emit("initial", {
                                pieces: pieces
                            })

                            // Wait on rival placing 
                            $info.innerHTML = "Waiting on your rival to place his/her pieces ..."
                        }
                    })
                }
            }
        }
    }
}

module.exports = prepareFieldForPlacing
