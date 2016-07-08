const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    if (req.session.player) {
        res.redirect("/profile/" + req.session.player.id)
    } else {
        res.redirect("/")
    }
})

router.get("/:userId", (req, res) => {
    if (req.session.player) {
        res.render("profile", {
            player: req.session.player
        })
    } else {
        res.redirect("/")
    }
})

module.exports = router
