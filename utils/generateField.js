const tileTypes = [
    "plain", 
    "hill", 
    "river"
]

const fieldLength = 9
const fieldWidth = 9

const generateField = function () {
    const field = []

    for (let i = 0; i < fieldLength; i++) {
        field.push([])

        for (let j = 0; j < fieldWidth; j++) {
            if (i === 0 || i === fieldLength - 1) {
                // The first and last rows are always Plain
                field[i].push({
                    type: "plain",
                    piece: ""
                })
            } else {
                field[i].push({
                    type: getRandomElementFrom(tileTypes),
                    piece: ""
                })
            }
        }
    }

    return field
}

function getRandomElementFrom (array) {
    return array[Math.floor(Math.random() * array.length)]
}

module.exports = generateField
