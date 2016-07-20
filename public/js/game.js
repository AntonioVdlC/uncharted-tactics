const socket = io()
socket.on("game", (data) => {
    console.log(data)

    let players = data.players
    let field = data.field
    let captured = data.captured

    let fieldLength = field.length
    let fieldWidth = field[0].length

    let playerNumber = players.findIndex((p) => p.id === player.id) + 1

    let pieces = [
        {
            "name": "Pawn",
            "value": 1
        },{
            "name": "Slinger",
            "value": 2
        },{
            "name": "Lancer",
            "value": 2
        },{
            "name": "Archer",
            "value": 3
        },{
            "name": "Lord",
            "value": 3
        },{
            "name": "Knight",
            "value": 3
        },{
            "name": "Bishop",
            "value": 3
        },{
            "name": "Tower",
            "value": 4
        },{
            "name": "Royal Guard",
            "value": 4
        },{
            "name": "General",
            "value": 5
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
        prepareFieldForKingPlacing(field, player, players)
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
                        <span class="piece" id="piece-select-${piece.name.toLocaleLowerCase().replace(/ /g, "-")}" data-type="${piece.name.toLocaleLowerCase().replace(/ /g, "-")}">
                            ${piece.name}
                        </span>`
                  })}
            </div>
        `
        Array.from(document.querySelectorAll(".piece")).forEach((piece) => {
            piece.addEventListener("click", (e) => {
                let type = e.target.dataset.type
                let piece = pieces.find(piece => piece.name.toLocaleLowerCase().replace(/ /g, "-") === type)
                
                addPiece(piece, field, playerNumber)
            })
        })
    })

    socket.on("field", (data) => {
        console.log(data)
        
        field = data.field
        captured = data.captured

        $field.innerHTML = displayField(field)
        $capture1.innerHTML = displayCaptured(captured[0])
        $capture2.innerHTML = displayCaptured(captured[1])
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
            fieldHTML += `<td id="${i}-${j}" class="tile ${field[i][j].type} ${(field[i][j].piece) ? "player-" + field[i][j].piece.player : ""}">${(field[i][j].piece) ? field[i][j].piece.type : ""}</td>`
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

function prepareFieldForKingPlacing (field, player, players) {
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

        $capture.innerHTML += `<p data-name="${piece.name}">${piece.name}</p>`
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
        } 
        if (availablePoints < 3) {
            if (document.getElementById("piece-select-bishop"))
                document.getElementById("piece-select-bishop").remove()
            if (document.getElementById("piece-select-knight"))
                document.getElementById("piece-select-knight").remove()
            if (document.getElementById("piece-select-tower"))
                document.getElementById("piece-select-tower").remove()
        } 
        if (availablePoints < 2) {
            if (document.getElementById("piece-select-archer"))
                document.getElementById("piece-select-archer").remove()
            if (document.getElementById("piece-select-lancer"))
                document.getElementById("piece-select-lancer").remove()
            if (document.getElementById("piece-select-lord"))
                document.getElementById("piece-select-lord").remove()
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
                    $tile.innerHTML = piece
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
