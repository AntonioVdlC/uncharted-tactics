const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    if (req.session.userId) {
        res.render("game")
    } else {
        res.redirect("/")
    }
})

module.exports = router
