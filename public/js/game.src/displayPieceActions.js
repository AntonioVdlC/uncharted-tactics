const displayPieceActions = function (field, piece, position, playerNumber) {
    // Highlight the clicked piece
    document.getElementById(position.i + "-" + position.j).className += " selected"

    // Highlight possible movements actions
    let tileType = field[position.i][position.j].type
    let action = piece.action[tileType]

    let actionField = {}
    if (action.length === 3) {
        actionField.i = {
            start: Math.max(0, position.i - 1),
            end: Math.min(field.length, position.i + 1)
        }
        actionField.j = {
            start : Math.max(0, position.j - 1),
            end: Math.min(field[0].length, position.j + 1)
        }
    } else /* action.length === 5 */ {
        actionField.i = {
            start: Math.max(0, position.i - 2),
            end: Math.min(field.length, position.i + 2)
        }
        actionField.j = {
            start : Math.max(0, position.j - 2),
            end: Math.min(field[0].length, position.j + 2)
        }
    }

    let matriceCenter = Math.floor(action.length / 2)
    if (playerNumber === 1) {
        for (let i = actionField.i.end; i >= actionField.i.start; i --) {
            for (let j = actionField.j.end; j >= actionField.j.start; j --) {
                console.log(i + "-" + j)
                console.log(field[i][j])
                console.log(action[i + (matriceCenter - position.i)][j + (matriceCenter - position.j)].move)
                console.log(action[i + (matriceCenter - position.i)][j + (matriceCenter - position.j)].capture)
            }
        }
    } else /* playerNumber === 2 */ {
        for (let i = actionField.i.start; i <= actionField.i.end; i ++) {
            for (let j = actionField.j.start; j <= actionField.j.end; j ++) {
                console.log(i + "-" + j)
                console.log(field[i][j])
                console.log(action[i + (matriceCenter - position.i)][j + (matriceCenter - position.j)].move)
                console.log(action[i + (matriceCenter - position.i)][j + (matriceCenter - position.j)].capture)
            }
        }
    }
}

module.exports = displayPieceActions
