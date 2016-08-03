const dashify = require("dashify")

const renderCaptured = function (captured) {
    let capturedHTML = ``

    capturedHTML += `<p><span class="captured-back">${5 - captured.back}</span></p>`
    capturedHTML += captured.pieces.reduce((html, piece) => {
        return html + `<p><span data-type="${piece.type}" class="piece player-${piece.player} ${dashify(piece.type)}">${piece.type}</span></p>`
    }, ``)

    return capturedHTML
}

module.exports = renderCaptured
