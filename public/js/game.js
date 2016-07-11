const socket = io()
socket.on("game", (data) => {
    console.log(data)
    
    // Cache DOM elements
    let $players = document.getElementById("players")
    let $field = document.getElementById("field")
    let $info = document.getElementById("info")
    let $capture1 = document.getElementById("capture-player-1")
    let $capture2 = document.getElementById("capture-player-2")

    // Display players and field
    $players.innerHTML = displayPlayers(data.players)
    $field.innerHTML = displayField(data.field)
    $info.innerHTML = ""

    // Position rival's King
    $info.innerHTML = "Place the rival's King in the last row!"
    if (player.id === data.players[0].id) {
        $capture1.innerHTML = `<span class="place-king" id="place-king">K</span>`
    } else {
        $capture2.innerHTML = `<span class="place-king" id="place-king">K</span>`
    }

    document.getElementById("place-king").addEventListener("click", (e) => {
        prepareFieldForKingPlacing(data.field, player, data.players, data.id)
    })

    socket.on("king", (data) => {
        console.log(data)
        ;[].forEach.call(document.querySelectorAll(".forbidden"), (tile) => {
            tile.classList.remove("forbidden")
        })
        document.getElementById(data[0].i + "-" + data[0].j).innerHTML = "K"
        document.getElementById(data[1].i + "-" + data[1].j).innerHTML = "K"

        $info.innerHTML = ""

        // Position own's pieces
        $info.innerHTML = "Position your own pieces ..."
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
