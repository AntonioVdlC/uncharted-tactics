const updateField = function (field, action) {
    let newField = Array.from(field)
    newField.captured = Array.from(field.captured)
    
    if (action.type === "move") {
        if (action.start) {
            delete newField[action.start.i][action.start.j].piece
        }
        newField[action.end.i][action.end.j].piece = {
            type: action.piece.type,
            player: action.player
        }
    } else if (action.type === "capture") {
        // Perform capture
        newField.captured[action.player - 1].pieces.push({
            type: newField[action.end.i][action.end.j].piece.type,
            player: action.player
        })

        // Perform move
        if (action.piece.infighting) {
            delete newField[action.start.i][action.start.j].piece
            
            newField[action.end.i][action.end.j].piece = {
                type: action.piece.type,
                player: action.player
            }
        } else {
            delete newField[action.end.i][action.end.j].piece
        }
    } else if (action.type === "initial") { 
        action.pieces.forEach((piece) => {
            newField[piece.i][piece.j].piece = {
                type: piece.type,
                player: action.player
            }
        })
    } else {
        throw new Error("Action type not recognized.")
    }

    return newField
}

module.exports = updateField
