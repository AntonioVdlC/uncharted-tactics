const handlePieceActions = function (e, field, pieces, socket) {
    let $selected = document.querySelector(".selected")

    let startTileId = $selected.id
    let start = {
        i: parseInt(startTileId.split("-")[0], 10),
        j: parseInt(startTileId.split("-")[1], 10)
    }

    let endTileId = e.target.id
    let end = {
        i: parseInt(endTileId.split("-")[0], 10),
        j: parseInt(endTileId.split("-")[1], 10)
    }

    let piece = pieces.find(piece => piece.type === $selected.children[0].dataset.type)

    if (e.target && e.target.matches(".move")) {
        socket.emit("turn", {
            type: "move",
            piece: piece,
            start: start,
            end: end
        })
    } else if (e.target && e.target.matches(".capture")) {
        socket.emit("turn", {
            type: "capture",
            piece: piece,
            start: start,
            end: end
        })
    }
}

module.exports = handlePieceActions
