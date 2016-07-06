const express = require("express")
const app = express()

// Templateing engine
app.set("views", "./views")
app.set("view engine", "ejs")

// Static files
app.use(express.static(__dirname + "/public"))

// Routes
app.get("/", (req, res) => {
    res.render("index")
})

app.get("/profile", (req, res) => {
    res.render("profile")
})

app.get("/game", (req, res) => {
    res.render("game")
})

// Port
let port = process.env.PORT || 8080
app.listen(port, () => {
    console.log("Listening on port " + port + " ...")
})
