const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    if (req.session.player) {
        res.redirect("/profile/" + req.session.player.id)
    } else {
        res.render("index")
    }
})

module.exports = router
