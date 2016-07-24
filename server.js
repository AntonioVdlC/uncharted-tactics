const express = require("express")

const app = express()
const server = app.listen(require("./config/port"))

const io = require("socket.io")(server)
const socket = require("./socket/main")

const session = require("express-session")
const sessionMiddleware = session(require("./config/session"))

const index = require("./routes/index")
const auth = require("./routes/auth")
const profile = require("./routes/profile")
const game = require("./routes/game")
const logout = require("./routes/logout")

// Templateing engine
app.set("views", "./views")
app.set("view engine", "ejs")

// Static files
app.use(express.static(__dirname + "/public"))

// Socket.IO
socket(io)

// Session
app.use(sessionMiddleware)
io.use((socket, next) => {
    sessionMiddleware(socket.request, socket.request.res, next)
})

// Routes
app.use("/", index)
app.use("/auth", auth)
app.use("/profile", profile)
app.use("/game", game)
app.use("/logout", logout)
