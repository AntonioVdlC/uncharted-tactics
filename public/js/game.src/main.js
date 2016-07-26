const pieces = require("../../../config/pieces")

const dashify = require("dashify")

const addPiece = require("./addPiece")
const calculateStartPoints = require("./calculateStartPoints")
const displayPieceActions = require("./displayPieceActions")
const prepareFieldForPlacing = require("./prepareFieldForPlacing")
const renderCaptured = require("./renderCaptured")
const renderField = require("./renderField")
const renderPlayers = require("./renderPlayers")

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

    // Cache DOM elements
    let $players = document.getElementById("players")
    let $field = document.getElementById("field")
    let $info = document.getElementById("info")
    let $capture1 = document.getElementById("capture-player-1")
    let $capture2 = document.getElementById("capture-player-2")

    // Display players and field
    $players.innerHTML = renderPlayers(players)
    $field.innerHTML = renderField(field)
    $info.innerHTML = ""

    // Position rival's King
    $info.innerHTML = "Place the rival's King in the last row!"
    if (player.id === players[0].id) {
        $capture1.innerHTML = `<span class="piece player-2 king" id="place-king">King</span>`
    } else {
        $capture2.innerHTML = `<span class="piece player-1 king" id="place-king">King</span>`
    }

    document.getElementById("place-king").addEventListener("click", function (e) {
        let piece = pieces.find(piece => piece.name === "King")
        this.remove()
        prepareFieldForPlacing(piece, field, playerNumber, socket)
    })

    socket.on("king", (data) => {
        console.log(data)
        
        field = data.field
        $field.innerHTML = renderField(field)

        $info.innerHTML = ""

        // Position own's pieces
        $info.innerHTML = "Select your pieces for this game ..."
        $info.innerHTML += `<br>Points available: <span id="available-points">` + calculateStartPoints(player, players) + `</span>`
        $info.innerHTML += `
            <div class="pieces-container" id="pieces-container">
                  ${pieces.filter((piece) => piece.value).map((piece) => {
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
                
                addPiece(piece, field, playerNumber, socket)
            })
        })
    })

    // Start game
    socket.on("turn", (data) => {
        console.log(data)
        
        field = data.field
        captured = data.captured
        turn = data.turn

        $field.innerHTML = renderField(field)
        $capture1.innerHTML = renderCaptured(captured[0])
        $capture2.innerHTML = renderCaptured(captured[1])

        // Turn
        if (
            turn % 2 === 0 && playerNumber === 1 || 
            turn % 2 === 1 && playerNumber === 2
        ) {
            $info.innerHTML = `Waiting for your rival to play ...`
        } else {
            $info.innerHTML = `Your turn!`
            Array.from(document.querySelectorAll(".piece.player-" + playerNumber)).forEach(($piece) => {
                $piece.addEventListener("click", (e) => {
                    console.log(e)
                    let piece = pieces.find(piece => piece.name === e.target.dataset.name)
                    let position = {
                        i: parseInt(e.target.parentNode.id.split("-")[0], 10),
                        j: parseInt(e.target.parentNode.id.split("-")[1], 10)
                    }

                    ;[
                        ...document.querySelectorAll(".selected"), ...document.querySelectorAll(".move"),
                        ...document.querySelectorAll(".capture")
                    ].forEach(($tile) => {
                        $tile.classList.remove("selected")
                        $tile.classList.remove("move")
                        $tile.classList.remove("capture")
                    })
                    
                    displayPieceActions(field, piece, position, playerNumber)
                })
            })
        }
    })
})
