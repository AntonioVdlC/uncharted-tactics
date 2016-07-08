const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    if (req.session.player) {
        res.render("game", {
            player: req.session.player
        })
    } else {
        res.redirect("/")
    }
})

module.exports = router
