const renderField = function (field) {
    let fieldLength = field.length
    let fieldWidth = field[0].length
    
    let fieldHTML = ""

    fieldHTML += `<table class="field">`
    for (let i = 0; i < fieldLength; i++) {
        fieldHTML += `<tr>`
        for (let j = 0; j < fieldWidth; j++) {
            fieldHTML += `<td id="${i}-${j}" class="tile ${field[i][j].type}">${(field[i][j].piece) ? "<span data-name='" + field[i][j].piece.type + "' class='piece player-" + field[i][j].piece.player + " " + field[i][j].piece.type.toLocaleLowerCase().replace(/ /g, "-") + "'>" + field[i][j].piece.type + "</span>" : ""}</td>`
        }
        fieldHTML += `</tr>`
    }
    
    fieldHTML += `</table>`

    return fieldHTML
}

module.exports = renderField
