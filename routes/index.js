const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    if (req.session.userId) {
        res.redirect("/profile/" + req.session.userId)
    } else {
        res.render("index")
    }
})

module.exports = router
