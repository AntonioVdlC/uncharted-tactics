const socket = io()
socket.on("game", (data) => {
    console.log(data)

    let room = data.room
    let players = data.players
    let field = data.field

    let fieldLength = field.length
    let fieldWidth = field[0].length

    let playerNumber = players.findIndex((p) => p.id === player.id) + 1

    let pieces = [
        {
            "name": "Pawn",
            "value": 1
        },{
            "name": "Lancer",
            "value": 2
        },{
            "name": "Slinger",
            "value": 1
        },{
            "name": "Lord",
            "value": 2
        },{
            "name": "Knight",
            "value": 3
        },{
            "name": "Bishop",
            "value": 3
        },{
            "name": "Archer",
            "value": 2
        },{
            "name": "Tower",
            "value": 3
        },{
            "name": "Royal Guard",
            "value": 3
        },{
            "name": "General",
            "value": 4
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
        $capture1.innerHTML = `<span class="place-king" id="place-king">K</span>`
    } else {
        $capture2.innerHTML = `<span class="place-king" id="place-king">K</span>`
    }

    document.getElementById("place-king").addEventListener("click", (e) => {
        prepareFieldForKingPlacing(field, player, players, room)
    })

    socket.on("king", (data) => {
        console.log(data)
        ;[].forEach.call(document.querySelectorAll(".forbidden"), (tile) => {
            tile.classList.remove("forbidden")
        })
        for (let i = 0; i < fieldLength; i++) {
            for (let j = 0; j < fieldWidth; j++) {
                document.getElementById(i + "-" + j).removeEventListener("click", null)
            }
        }

        document.getElementById(data[0].i + "-" + data[0].j).innerHTML = "K"
        document.getElementById(data[1].i + "-" + data[1].j).innerHTML = "K"

        $info.innerHTML = ""

        // Position own's pieces
        $info.innerHTML = "Select your pieces for this game ..."
        $info.innerHTML += `<br>Points available: <span id="available-points">` + calculateAvailblePoints(player, players) + `</span>`
        $info.innerHTML += `
            <div class="pieces-container" id="pieces-container">
                  ${pieces.map((piece) => {
                      return `
                        <span class="piece" id="` + piece.name.toLocaleLowerCase().replace(/ /g, "-") +`">
                            ${piece.name}
                        </span>`
                  })}
            </div>
        `
        Array.from(document.querySelectorAll(".piece")).forEach((piece) => {
            piece.addEventListener("click", (e) => {
                let id = e.target.id
                let piece = pieces.find(piece => piece.name.toLocaleLowerCase().replace(/ /g, "-") === id)
                
                addPiece(piece, playerNumber)
            })
        })
    })

    // Start game

})

function displayPlayers (players) {
    let player1 = players[0]
    let player2 = players[1]

    return `${player1.name} vs ${player2.name}`
}

function displayField (field) {
    let fieldLength = field.length
    let fieldWidth = field[0].length
    
    let fieldHTML = ""

    fieldHTML += `<table class="field">`
    for (let i = 0; i < fieldLength; i++) {
        fieldHTML += `<tr>`
        for (let j = 0; j < fieldWidth; j++) {
            fieldHTML += `<td id="${i}-${j}" class="tile ${field[i][j].type}">${field[i][j].piece}</td>`
        }
        fieldHTML += `</tr>`
    }
    
    fieldHTML += `</table>`

    return fieldHTML
}

function prepareFieldForKingPlacing (field, player, players, room) {
    let fieldLength = field.length
    let fieldWidth = field[0].length

    let $info = document.getElementById("info")
    let $capture1 = document.getElementById("capture-player-1")
    let $capture2 = document.getElementById("capture-player-2")

    for (let i = 0; i < fieldLength; i++) {
        for (let j = 0; j < fieldWidth; j++) {
            let $tile = document.getElementById(i + "-" + j)
            
            if (
                player.id === players[0].id && (i !== fieldLength - 1 || j === 0 || j === fieldWidth - 1) ||
                player.id === players[1].id && (i !== 0 || j === 0 || j === fieldWidth - 1) 
            ) {
                $tile.className += " forbidden"
            } else {
                $tile.addEventListener("click", (e) => {
                    // Update the DOM
                    $tile.innerHTML = "K"
                    $capture1.innerHTML = ""
                    $capture2.innerHTML = ""

                    // Emit socket message
                    socket.emit("king", {
                        room: room,
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

function addPiece (piece, playerNumber) {
    let $points = document.getElementById("available-points")
    let $info = document.getElementById("info")

    let currentPoints = parseInt($points.innerHTML, 10)
    let availablePoints = currentPoints - piece.value

    if (availablePoints >= 0) {
        let $capture = document.getElementById("capture-player-" + playerNumber)

        $capture.innerHTML += `<p>${piece.name}</p>`
    } 
    
    if (availablePoints > 0) {
        $points.innerHTML = availablePoints
    } else {
        document.getElementById("pieces-container").remove()
        $info.innerHTML = `<p>Place your selected pieces on the field ...</p><p><button id="start-game">Start</button></p>`
    }
}
