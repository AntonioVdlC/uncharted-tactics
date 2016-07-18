const updateField = function (field, action) {
    let newField = Array.from(field)
    
    if (action.type === "move") {
        if (action.start) {
            delete newField[action.start.i][action.start.j].piece
        }
        newField[action.end.i][action.end.j].piece = action.piece
    } else if (action.type === "capture") {
        console.log("TODO ...")
    } else {
        throw new Error("Action type not recognized.")
    }

    return newField
}

module.exports = updateField
