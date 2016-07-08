const express = require("express")
const bodyParser = require("body-parser")

const router = express.Router()

// -- Mock Data -- \\
const players = require("../mock-data/players")
// -- Mock Data -- \\

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

router.post("/", (req, res) => {
    let player = players.find((player) => player.name === req.body.username)

    if (player && req.body.password === player.password) {
        req.session.userId = player.id
        req.session.player = player
        res.redirect("/profile/" + req.session.userId)
    } else {
        res.status(403).send("Wrong Login/Password.")
    }
})

module.exports = router
