const renderCaptured = function (captured) {
    let capturedHTML = ``

    capturedHTML += `<span class="">${5 - captured.back}</span>`
    capturedHTML += captured.pieces.reduce((html, piece) => {
        return `<span id="" class="">${piece.name}</span>`
    }, ``)

    return capturedHTML
}

module.exports = renderCaptured
