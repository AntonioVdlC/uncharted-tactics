;(function() {
    "use strict"

    document
        .getElementById("new-game-button")
        .addEventListener("click", (e) => {
            console.log(e)
            window.location = "/game"
        })
}())
