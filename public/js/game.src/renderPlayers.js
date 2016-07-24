const renderPlayers = function (players) {
    let player1 = players[0]
    let player2 = players[1]

    return `<span class="player-1">${player1.name}</span> vs <span class="player-2">${player2.name}</span>`
}

module.exports = renderPlayers
