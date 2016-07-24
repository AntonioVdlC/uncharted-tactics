const dashify = require("../../../utils/dashify")
const prepareFieldForPlacing = require("./prepareFieldForPlacing")

const addPiece = function (piece, field, playerNumber) {
    let $points = document.getElementById("available-points")
    let $info = document.getElementById("info")

    let currentPoints = parseInt($points.innerHTML, 10)
    let availablePoints = currentPoints - piece.value

    if (availablePoints >= 0) {
        let $capture = document.getElementById("capture-player-" + playerNumber)

        // Limit of 1 General and 2 Royal Guards
        if (piece.name === "General") {
            document.getElementById("piece-select-general").remove()
        }
        if (piece.name === "Royal Guard" && $capture.innerHTML.indexOf("Royal Guard") > -1) {
            document.getElementById("piece-select-royal-guard").remove()
        }

        $capture.innerHTML += `<p><span data-name="${piece.name}" class="piece player-${playerNumber} ${dashify(piece.name)}">${piece.name}</span></p>`
    }
    
    if (availablePoints > 0) {
        $points.innerHTML = availablePoints

        // Remove unavailable pieces
        if (availablePoints < 5) {
            if (document.getElementById("piece-select-general"))
                document.getElementById("piece-select-general").remove()
        } 
        if (availablePoints < 4) {
            if (document.getElementById("piece-select-royal-guard"))
                document.getElementById("piece-select-royal-guard").remove()
            if (document.getElementById("piece-select-tower"))
                document.getElementById("piece-select-tower").remove()
        } 
        if (availablePoints < 3) {
            if (document.getElementById("piece-select-archer"))
                document.getElementById("piece-select-archer").remove()
            if (document.getElementById("piece-select-bishop"))
                document.getElementById("piece-select-bishop").remove()
            if (document.getElementById("piece-select-knight"))
                document.getElementById("piece-select-knight").remove()
            if (document.getElementById("piece-select-lord"))
                document.getElementById("piece-select-lord").remove()
        } 
        if (availablePoints < 2) {
            if (document.getElementById("piece-select-lancer"))
                document.getElementById("piece-select-lancer").remove()
            if (document.getElementById("piece-select-slinger"))
                document.getElementById("piece-select-slinger").remove()
        }
    } else {
        document.getElementById("pieces-container").remove()
        $info.innerHTML = `<p>Place your selected pieces on the field ...</p>`

        Array.from(document.querySelectorAll("#capture-player-" + playerNumber + " p")).forEach((piece) => {
            piece.addEventListener("click", function (e) {
                let piece = e.target.dataset.name
                this.remove()
                prepareFieldForPlacing(piece, field, playerNumber)
            })
        })
    }
}

module.exports = addPiece
