const calculateStartPoints = function (player, players) {
    let rival = players.find((p) => p.id !== player.id)

    if (rival.level >= player.level) {
        return 33
    } else {
        return 33 - (player.level - rival.level)
    }
}

module.exports = calculateStartPoints
