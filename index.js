const express = require("express")
const session = require("express-session")

const app = express()

const index = require("./routes/index")
const auth = require("./routes/auth")
const profile = require("./routes/profile")
const game = require("./routes/game")

// Templateing engine
app.set("views", "./views")
app.set("view engine", "ejs")

// Static files
app.use(express.static(__dirname + "/public"))

// Session
app.use(session({
    name: process.env.SESSION_NAME || "session",
    secret: process.env.SESSION_SECRET || "S3CR37!",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        domain: process.env.COOKIE_DOMAIN || "localhost",
        path: process.env.COOKIE_PATH || "/",
        maxAge: 60 * 60 * 1000 // 1 hour
    }
}))

// Routes
app.use("/", index)
app.use("/auth", auth)
app.use("/profile", profile)
app.use("/game", game)

// Port
let port = process.env.PORT || 8080
app.listen(port, () => {
    console.log("Listening on port " + port + " ...")
})
