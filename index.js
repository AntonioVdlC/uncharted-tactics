const express = require("express")
const app = express()

const login = require("./routes/login")
const profile = require("./routes/profile")
const game = require("./routes/game")

// Templateing engine
app.set("views", "./views")
app.set("view engine", "ejs")

// Static files
app.use(express.static(__dirname + "/public"))

// Routes
app.use("/", login)
app.use("/profile", profile)
app.use("/game", game)

// Port
let port = process.env.PORT || 8080
app.listen(port, () => {
    console.log("Listening on port " + port + " ...")
})
