const session = {
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
}

module.exports = session
