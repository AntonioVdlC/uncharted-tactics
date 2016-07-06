const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    if (req.session.userId) {
        res.redirect("/profile/" + req.session.userId)
    } else {
        res.redirect("/")
    }
})

router.get("/:userId", (req, res) => {
    if (req.session.userId) {
        res.render("profile")
    } else {
        res.redirect("/")
    }
})

module.exports = router
