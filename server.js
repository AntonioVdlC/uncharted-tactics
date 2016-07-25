const express = require("express")
const app = express()

// Server
const server = app.listen(require("./config/port"))

// Templateing engine
app.set("views", "./views")
app.set("view engine", "ejs")

// Static files
app.use(express.static(__dirname + "/public"))

// Socket.IO
const io = require("socket.io")(server)
const socket = require("./socket/main")

socket(io)

// Session
const session = require("express-session")
const sessionMiddleware = session(require("./config/session"))

app.use(sessionMiddleware)
io.use((socket, next) => {
    sessionMiddleware(socket.request, socket.request.res, next)
})

// Routes
app.use("/", require("./routes/index"))
app.use("/auth", require("./routes/auth"))
app.use("/profile", require("./routes/profile"))
app.use("/game", require("./routes/game"))
app.use("/logout", require("./routes/logout"))
