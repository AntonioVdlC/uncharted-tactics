const rotateMatrix = require("rotate-matrix")

const displayPieceActions = function (field, piece, position, playerNumber) {
    // Highlight the clicked piece
    document.getElementById(position.i + "-" + position.j).className += " selected"

    // Highlight possible movements actions
    let tileType = field[position.i][position.j].type
    let action = (playerNumber === 1) ? 
        rotateMatrix(piece.action[tileType], 2) : 
        piece.action[tileType]

    let matriceCenter = Math.floor(action.length / 2)
    let actionField = {
        i: {
            start: Math.max(0, position.i - matriceCenter),
            end: Math.min(field.length - 1, position.i + matriceCenter)
        },
        j: {
            start : Math.max(0, position.j - matriceCenter),
            end: Math.min(field[0].length - 1, position.j + matriceCenter)
        }
    }
    let margin = {
        i: matriceCenter - position.i,
        j: matriceCenter - position.j
    }

    for (let i = actionField.i.start; i <= actionField.i.end; i ++) {
        for (let j = actionField.j.start; j <= actionField.j.end; j ++) {
            
            let $tile = document.getElementById(i + "-" + j)

            let move = action[i + margin.i][j + margin.j].move
            let capture = action[i + margin.i][j + margin.j].capture

            // Move
            if (move && !field[i][j].piece) {
                $tile.className += " move"
            }

            // Capture
            if (capture && field[i][j].piece && field[i][j].piece.player !== playerNumber) {
                $tile.className += " capture"
            }
        }
    }
}

module.exports = displayPieceActions
