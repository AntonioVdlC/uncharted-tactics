const socket = io()
socket.on("game", (data) => {
    console.log(data)
    
    // Cache DOM elements
    let $players = document.getElementById("players")
    let $board = document.getElementById("board")
    let $info = document.getElementById("info")

    // Display players and field
    $players.innerHTML = displayPlayers(data.players)
    $board.innerHTML = displayBoard(data.field)
    $info.innerHTML = ""

    // Position rival's King
    
    // Position own's pieces

    // Start game

})

function displayPlayers (players) {
    let player1 = players[0]
    let player2 = players[1]

    return `${player1.name} vs ${player2.name}`
}

function displayBoard (field) {
    let fieldLength = field.length
    let fieldWidth = field[0].length
    
    let fieldHTML = ""

    fieldHTML += `<table class="board">`
    for (let i = 0; i < fieldLength; i++) {
        fieldHTML += `<tr>`
        for (let j = 0; j < fieldWidth; j++) {
            fieldHTML += `<td id="${i}-${j}" class="tile ${field[i][j].toLowerCase()}"></td>`
        }
        fieldHTML += `</tr>`
    }
    
    fieldHTML += `</table>`

    return `<div id="capture-player-1" class="capture"></div>` +
        `<div class="board-container">` + 
        fieldHTML +
        `</div>` +
        `<div id="capture-player-2" class="capture"></div>`
}
