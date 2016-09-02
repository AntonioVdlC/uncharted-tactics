const pieces = require("../../../config/pieces")

const dashify = require("dashify")

const addPiece = require("./addPiece")
const calculateStartPoints = require("./calculateStartPoints")
const displayPieceActions = require("./displayPieceActions")
const handlePieceActions = require("./handlePieceActions")
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
        let piece = pieces.find(piece => piece.type === "King")
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
                        <span class="piece player-${playerNumber} ${dashify(piece.type)}" id="piece-select-${dashify(piece.type)}" data-type="${dashify(piece.type)}">
                            ${piece.type}
                        </span>`
                  })}
            </div>
        `
        Array.from(document.querySelectorAll(".piece")).forEach((piece) => {
            piece.addEventListener("click", (e) => {
                let type = e.target.dataset.type
                let piece = pieces.find(piece => dashify(piece.type) === type)
                
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

        // Attach move and capture event handlers
        document.querySelector("table.field").addEventListener("click", (e) => handlePieceActions(e, field, pieces, socket))

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
                    // Retrieve info
                    let piece = pieces.find(piece => piece.type === e.target.dataset.type)
                    let position = {
                        i: parseInt(e.target.parentNode.id.split("-")[0], 10),
                        j: parseInt(e.target.parentNode.id.split("-")[1], 10)
                    }

                    // Clear field
                    ;[
                        ...document.querySelectorAll(".selected"), ...document.querySelectorAll(".move"),
                        ...document.querySelectorAll(".capture")
                    ].forEach(($tile) => {
                        $tile.classList.remove("selected")
                        $tile.classList.remove("move")
                        $tile.classList.remove("capture")
                    })
                    
                    // Display piiece actions
                    displayPieceActions(field, piece, position, playerNumber)
                })
            })
        }
    })

    // Game Over
    socket.on("victory", (data) => {
        $info.innerHTML = `Victory - <a href="/">Click Here</a>`        
    })
    socket.on("defeat", (data) => {
        $info.innerHTML = `Defeat - <a href="/">Click Here</a>`     
    })
})
