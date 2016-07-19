const updateField = function (field, action) {
    let newField = Array.from(field)
    newField.captured = Array.from(field.captured)
    
    if (action.type === "move") {
        if (action.start) {
            delete newField[action.start.i][action.start.j].piece
        }
        newField[action.end.i][action.end.j].piece = {
            type: action.piece,
            player: action.player
        }
    } else if (action.type === "capture") {
        console.log("TODO ...")
    } else {
        throw new Error("Action type not recognized.")
    }

    return newField
}

module.exports = updateField
