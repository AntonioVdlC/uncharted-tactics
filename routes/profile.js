const express = require("express")
const router = express.Router()

// -- Mock Data -- \\
const players = require("../mock-data/players")
// -- Mock Data -- \\

router.get("/", (req, res) => {
    if (req.session.userId) {
        res.redirect("/profile/" + req.session.userId)
    } else {
        res.redirect("/")
    }
})

router.get("/:userId", (req, res) => {
    if (req.session.userId) {
        res.render("profile", players.find((player) => player.id === req.session.userId))
    } else {
        res.redirect("/")
    }
})

module.exports = router
