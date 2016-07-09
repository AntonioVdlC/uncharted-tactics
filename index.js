const express = require("express")
const session = require("express-session")

const app = express()

const server = app.listen(process.env.PORT || 8080)
const io = require("socket.io")(server)

const socket = require("./utils/socket")

const index = require("./routes/index")
const auth = require("./routes/auth")
const profile = require("./routes/profile")
const game = require("./routes/game")
const logout = require("./routes/logout")

// Templateing engine
app.set("views", "./views")
app.set("view engine", "ejs")

// Socket.IO
socket(io)

// Static files
app.use(express.static(__dirname + "/public"))

// Session
let sessionMiddleware = session({
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
})

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
