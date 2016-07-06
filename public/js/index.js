;(function() {
    "use strict"

    document
        .getElementById("login-button")
        .addEventListener("click", (e) => {
            console.log(e)
            window.location = "/profile"
        })
}())
