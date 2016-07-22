const socket = io()
socket.on("game", (data) => {
    console.log(data)

    let players = data.players
    let field = data.field
    let captured = data.captured

    let fieldLength = field.length
    let fieldWidth = field[0].length

    let playerNumber = players.findIndex((p) => p.id === player.id) + 1
    let turn = 0

    let pieces = [
        {
            "name": "Pawn",
            "value": 1,
            "action": {
                "plain": [
                    [{move: 0, capture: 1}, {move: 1, capture: 0}, {move: 0, capture: 1}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
                ],
                "hill": [
                    [{move: 0, capture: 1}, {move: 1, capture: 0}, {move: 0, capture: 1}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
                ],
                "river": [
                    [{move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
                ]
            }
        },{
            "name": "Slinger",
            "value": 2,
            "action": {
                "plain": [
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 1}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
                ],
                "hill": [
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 2}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
                ],
                "river": [
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
                ]
            }
        },{
            "name": "Lancer",
            "value": 2,
            "action": {
                "plain": [
                    [{move: 0, capture: 0}, {move: 1, capture: 2}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
                ],
                "hill": [
                    [{move: 0, capture: 0}, {move: 1, capture: 2}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
                ],
                "river": [
                    [{move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
                ]
            }
        },{
            "name": "Archer",
            "value": 3,
            "action": {
                "plain": [
                    [{move: 0, capture: 0}, {move: 0, capture: 1}, {move: 0, capture: 1}, {move: 0, capture: 1}, {move: 0, capture: 0}],
                    [{move: 0, capture: 1}, {move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 1}],
                    [{move: 0, capture: 1}, {move: 1, capture: 0}, {move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 1}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
                ],
                "hill": [
                    [{move: 0, capture: 1}, {move: 0, capture: 2}, {move: 0, capture: 2}, {move: 0, capture: 2}, {move: 0, capture: 1}],
                    [{move: 0, capture: 2}, {move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 2}],
                    [{move: 0, capture: 2}, {move: 1, capture: 0}, {move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 2}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
                ],
                "river": [
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
                ]
            }
        },{
            "name": "Lord",
            "value": 3,
            "action": {
                "plain": [
                    [{move: 1, capture: 1}, {move: 1, capture: 1}, {move: 1, capture: 1}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 1, capture: 1}, {move: 0, capture: 0}, {move: 1, capture: 1}]
                ],
                "hill": [
                    [{move: 1, capture: 1}, {move: 1, capture: 1}, {move: 1, capture: 1}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 1, capture: 1}, {move: 0, capture: 0}, {move: 1, capture: 1}]
                ],
                "river": [
                    [{move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
                ]
            }
        },{
            "name": "Knight",
            "value": 3,
            "action": {
                "plain": [
                    [{move: 0, capture: 0}, {move: 1, capture: 1}, {move: 0, capture: 0}, {move: 1, capture: 1}, {move: 0, capture: 0}],
                    [{move: 1, capture: 1}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 1, capture: 1}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 1}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
                ],
                "hill": [
                    [{move: 0, capture: 0}, {move: 1, capture: 1}, {move: 0, capture: 0}, {move: 1, capture: 1}, {move: 0, capture: 0}],
                    [{move: 1, capture: 1}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 1, capture: 1}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 1}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
                ],
                "river": [
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
                ]
            }
        },{
            "name": "Bishop",
            "value": 3,
            "action": {
                "plain": [
                    [{move: 2, capture: 2}, {move: 0, capture: 0}, {move: 2, capture: 2}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 2, capture: 2}, {move: 0, capture: 0}, {move: 2, capture: 2}]
                ],
                "hill": [
                    [{move: 1, capture: 1}, {move: 0, capture: 0}, {move: 1, capture: 1}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 1, capture: 1}, {move: 0, capture: 0}, {move: 1, capture: 1}]
                ],
                "river": [
                    [{move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
                ]
            }
        },{
            "name": "Tower",
            "value": 4,
            "action": {
                "plain": [
                    [{move: 0, capture: 0}, {move: 10, capture: 10}, {move: 0, capture: 0}],
                    [{move: 10, capture: 10}, {move: 0, capture: 0}, {move: 10, capture: 10}],
                    [{move: 0, capture: 0}, {move: 10, capture: 10}, {move: 0, capture: 0}]
                ],
                "hill": [
                    [{move: 0, capture: 0}, {move: 1, capture: 1}, {move: 0, capture: 0}],
                    [{move: 1, capture: 1}, {move: 0, capture: 0}, {move: 1, capture: 1}],
                    [{move: 0, capture: 0}, {move: 1, capture: 1}, {move: 0, capture: 0}]
                ],
                "river": [
                    [{move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
                ]
            }
        },{
            "name": "Royal Guard",
            "value": 4,
            "action": {
                "plain": [
                    [{move: 2, capture: 2}, {move: 2, capture: 2}, {move: 2, capture: 2}],
                    [{move: 2, capture: 2}, {move: 0, capture: 0}, {move: 2, capture: 2}],
                    [{move: 0, capture: 0}, {move: 1, capture: 1}, {move: 0, capture: 0}]
                ],
                "hill": [
                    [{move: 1, capture: 1}, {move: 1, capture: 1}, {move: 1, capture: 1}],
                    [{move: 1, capture: 1}, {move: 0, capture: 0}, {move: 1, capture: 1}],
                    [{move: 0, capture: 0}, {move: 1, capture: 1}, {move: 0, capture: 0}]
                ],
                "river": [
                    [{move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
                ]
            }
        },{
            "name": "General",
            "value": 5,
            "action": {
                "plain": [
                    [{move: 10, capture: 10}, {move: 10, capture: 10}, {move: 10, capture: 10}],
                    [{move: 10, capture: 10}, {move: 0, capture: 0}, {move: 10, capture: 10}],
                    [{move: 10, capture: 10}, {move: 10, capture: 10}, {move: 10, capture: 10}]
                ],
                "hill": [
                    [{move: 1, capture: 1}, {move: 1, capture: 1}, {move: 1, capture: 1}],
                    [{move: 1, capture: 1}, {move: 0, capture: 0}, {move: 1, capture: 1}],
                    [{move: 1, capture: 1}, {move: 1, capture: 1}, {move: 1, capture: 1}]
                ],
                "river": [
                    [{move: 0, capture: 0}, {move: 1, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}],
                    [{move: 0, capture: 0}, {move: 0, capture: 0}, {move: 0, capture: 0}]
                ]
            }
        }
    ]

    // Cache DOM elements
    let $players = document.getElementById("players")
    let $field = document.getElementById("field")
    let $info = document.getElementById("info")
    let $capture1 = document.getElementById("capture-player-1")
    let $capture2 = document.getElementById("capture-player-2")

    // Display players and field
    $players.innerHTML = displayPlayers(players)
    $field.innerHTML = displayField(field)
    $info.innerHTML = ""

    // Position rival's King
    $info.innerHTML = "Place the rival's King in the last row!"
    if (player.id === players[0].id) {
        $capture1.innerHTML = `<span class="piece player-2 king" id="place-king">King</span>`
    } else {
        $capture2.innerHTML = `<span class="piece player-1 king" id="place-king">King</span>`
    }

    document.getElementById("place-king").addEventListener("click", function (e) {
        this.remove()
        prepareFieldForKingPlacing(field, playerNumber)
    })

    socket.on("king", (data) => {
        console.log(data)
        
        field = data.field
        $field.innerHTML = displayField(field)

        $info.innerHTML = ""

        // Position own's pieces
        $info.innerHTML = "Select your pieces for this game ..."
        $info.innerHTML += `<br>Points available: <span id="available-points">` + calculateAvailblePoints(player, players) + `</span>`
        $info.innerHTML += `
            <div class="pieces-container" id="pieces-container">
                  ${pieces.map((piece) => {
                      return `
                        <span class="piece player-${playerNumber} ${dashify(piece.name)}" id="piece-select-${dashify(piece.name)}" data-name="${dashify(piece.name)}">
                            ${piece.name}
                        </span>`
                  })}
            </div>
        `
        Array.from(document.querySelectorAll(".piece")).forEach((piece) => {
            piece.addEventListener("click", (e) => {
                let name = e.target.dataset.name
                let piece = pieces.find(piece => dashify(piece.name) === name)
                
                addPiece(piece, field, playerNumber)
            })
        })
    })

    // Start game
    socket.on("turn", (data) => {
        console.log(data)
        
        field = data.field
        captured = data.captured
        turn = data.turn

        $field.innerHTML = displayField(field)
        $capture1.innerHTML = displayCaptured(captured[0])
        $capture2.innerHTML = displayCaptured(captured[1])

        // Turn
        if (turn % 2 === 0) {
            // Player 2
            if (player.id === players[0].id) {
                $info.innerHTML = `Waiting for your rival to play ...`
            } else {
                $info.innerHTML = `Your turn!`
                Array.from(document.querySelectorAll(".piece.player-2")).forEach(($piece) => {
                    $piece.addEventListener("click", (e) => {
                        console.log(e)
                        let piece = pieces.find(piece => piece.name === e.target.dataset.name)
                        let position = {
                            i: parseInt(e.target.parentNode.id.split("-")[0], 10),
                            j: parseInt(e.target.parentNode.id.split("-")[1], 10)
                        }

                        document.getElementById("field").innerHTML = displayField(field)
                        
                        displayPieceActions(field, piece, position, playerNumber)

                        // Cancel action on click on selected piece 
                        document.getElementById(position.i + "-" + position.j).addEventListener("click", (e) => {
                            document.getElementById("field").innerHTML = displayField(field)
                        })
                    })
                })
            }
        } else {
            // Player 1
            if (player.id === players[0].id) {
                $info.innerHTML = `Your turn!`
                Array.from(document.querySelectorAll(".piece.player-1")).forEach(($piece) => {
                    $piece.addEventListener("click", (e) => {
                        console.log(e)
                        let piece = pieces.find(piece => piece.name === e.target.dataset.name)
                        let position = {
                            i: parseInt(e.target.parentNode.id.split("-")[0], 10),
                            j: parseInt(e.target.parentNode.id.split("-")[1], 10)
                        }

                        document.getElementById("field").innerHTML = displayField(field)
                        
                        displayPieceActions(field, piece, position, playerNumber)

                        // Cancel action on click on selected piece 
                        document.getElementById(position.i + "-" + position.j).addEventListener("click", (e) => {
                            document.getElementById("field").innerHTML = displayField(field)
                        })
                    })
                })
            } else {
                $info.innerHTML = `Waiting for your rival to play ...`
            }
        }
    })
})

function displayPlayers (players) {
    let player1 = players[0]
    let player2 = players[1]

    return `<span class="player-1">${player1.name}</span> vs <span class="player-2">${player2.name}</span>`
}

function displayField (field) {
    let fieldLength = field.length
    let fieldWidth = field[0].length
    
    let fieldHTML = ""

    fieldHTML += `<table class="field">`
    for (let i = 0; i < fieldLength; i++) {
        fieldHTML += `<tr>`
        for (let j = 0; j < fieldWidth; j++) {
            fieldHTML += `<td id="${i}-${j}" class="tile ${field[i][j].type}">${(field[i][j].piece) ? "<span data-name='" + field[i][j].piece.type + "' class='piece player-" + field[i][j].piece.player + " " + field[i][j].piece.type.toLocaleLowerCase().replace(/ /g, "-") + "'>" + field[i][j].piece.type + "</span>" : ""}</td>`
        }
        fieldHTML += `</tr>`
    }
    
    fieldHTML += `</table>`

    return fieldHTML
}

function displayCaptured (captured) {
    let capturedHTML = ``

    capturedHTML += `<span class="">${5 - captured.back}</span>`
    capturedHTML += captured.pieces.reduce((html, piece) => {
        return `<span id="" class="">${piece.name}</span>`
    }, ``)

    return capturedHTML
}

function prepareFieldForKingPlacing (field, playerNumber) {
    let fieldLength = field.length
    let fieldWidth = field[0].length

    let $info = document.getElementById("info")

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

                    document.getElementById("field").innerHTML = displayField(field)

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
}

function calculateAvailblePoints (player, players) {
    let rival = players.find((p) => p.id !== player.id)

    if (rival.level >= player.level) {
        return 33
    } else {
        return 33 - (player.level - rival.level)
    }
}

function addPiece (piece, field, playerNumber) {
    let $points = document.getElementById("available-points")
    let $info = document.getElementById("info")

    let currentPoints = parseInt($points.innerHTML, 10)
    let availablePoints = currentPoints - piece.value

    if (availablePoints >= 0) {
        let $capture = document.getElementById("capture-player-" + playerNumber)

        // Limit of 1 General and 2 Royal Guards
        if (piece.name === "General") {
            document.getElementById("piece-select-general").remove()
        }
        if (piece.name === "Royal Guard" && $capture.innerHTML.indexOf("Royal Guard") > -1) {
            document.getElementById("piece-select-royal-guard").remove()
        }

        $capture.innerHTML += `<p><span data-name="${piece.name}" class="piece player-${playerNumber} ${dashify(piece.name)}">${piece.name}</span></p>`
    }
    
    if (availablePoints > 0) {
        $points.innerHTML = availablePoints

        // Remove unavailable pieces
        if (availablePoints < 5) {
            if (document.getElementById("piece-select-general"))
                document.getElementById("piece-select-general").remove()
        } 
        if (availablePoints < 4) {
            if (document.getElementById("piece-select-royal-guard"))
                document.getElementById("piece-select-royal-guard").remove()
            if (document.getElementById("piece-select-tower"))
                document.getElementById("piece-select-tower").remove()
        } 
        if (availablePoints < 3) {
            if (document.getElementById("piece-select-archer"))
                document.getElementById("piece-select-archer").remove()
            if (document.getElementById("piece-select-bishop"))
                document.getElementById("piece-select-bishop").remove()
            if (document.getElementById("piece-select-knight"))
                document.getElementById("piece-select-knight").remove()
            if (document.getElementById("piece-select-lord"))
                document.getElementById("piece-select-lord").remove()
        } 
        if (availablePoints < 2) {
            if (document.getElementById("piece-select-lancer"))
                document.getElementById("piece-select-lancer").remove()
            if (document.getElementById("piece-select-slinger"))
                document.getElementById("piece-select-slinger").remove()
        }
    } else {
        document.getElementById("pieces-container").remove()
        $info.innerHTML = `<p>Place your selected pieces on the field ...</p>`

        Array.from(document.querySelectorAll("#capture-player-" + playerNumber + " p")).forEach((piece) => {
            piece.addEventListener("click", function (e) {
                let piece = e.target.dataset.name
                this.remove()
                prepareFieldForPlacing(piece, field, playerNumber)
            })
        })
    }
}

function prepareFieldForPlacing (piece, field, playerNumber) {
    let fieldLength = field.length
    let fieldWidth = field[0].length

    let $info = document.getElementById("info")

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

                    document.getElementById("field").innerHTML = displayField(field)

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

function dashify (str) {
    return String(str)
        .toLowerCase()
        .replace(/ /g, "-")
}

function displayPieceActions (field, piece, position, playerNumber) {
    // Highlight the clicked piece
    document.getElementById(position.i + "-" + position.j).className += " selected"

    // Highlight possible movements actions
    let tileType = field[position.i][position.j].type
    let action = piece.action[tileType]

    let actionField = {}
    if (action.length === 3) {
        actionField.i = {
            start: Math.max(0, position.i - 1),
            end: Math.min(field.length, position.i + 1)
        }
        actionField.j = {
            start : Math.max(0, position.j - 1),
            end: Math.min(field[0].length, position.j + 1)
        }
    } else /* action.length === 5 */ {
        actionField.i = {
            start: Math.max(0, position.i - 2),
            end: Math.min(field.length, position.i + 2)
        }
        actionField.j = {
            start : Math.max(0, position.j - 2),
            end: Math.min(field[0].length, position.j + 2)
        }
    }

    let matriceCenter = Math.floor(action.length / 2)
    if (playerNumber === 1) {
        for (let i = actionField.i.end; i >= actionField.i.start; i --) {
            for (let j = actionField.j.end; j >= actionField.j.start; j --) {
                console.log(i + "-" + j)
                console.log(field[i][j])
                console.log(action[i + (matriceCenter - position.i)][j + (matriceCenter - position.j)].move)
                console.log(action[i + (matriceCenter - position.i)][j + (matriceCenter - position.j)].capture)
            }
        }
    } else /* playerNumber === 2 */ {
        for (let i = actionField.i.start; i <= actionField.i.end; i ++) {
            for (let j = actionField.j.start; j <= actionField.j.end; j ++) {
                console.log(i + "-" + j)
                console.log(field[i][j])
                console.log(action[i + (matriceCenter - position.i)][j + (matriceCenter - position.j)].move)
                console.log(action[i + (matriceCenter - position.i)][j + (matriceCenter - position.j)].capture)
            }
        }
    }
}
