const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    if (req.session.player) {
        res.render("game", {
            player: JSON.stringify({
                id: req.session.player.id,
                name: req.session.player.name,
                level: req.session.player.level
            })
        })
    } else {
        res.redirect("/")
    }
})

module.exports = router
