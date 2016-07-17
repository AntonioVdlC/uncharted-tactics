const generateField = function (length, width, tileTypes, tileSelectionFn) {
    const field = []

    for (let i = 0; i < length; i++) {
        field.push([])

        for (let j = 0; j < width; j++) {
            if (i === 0 || i === length - 1) {
                // The first and last rows are always Plain
                field[i].push({
                    type: "plain"
                })
            } else {
                field[i].push({
                    type: tileSelectionFn(tileTypes)
                })
            }
        }
    }

    return field
}

module.exports = generateField
