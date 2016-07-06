const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    let userId = 1
    res.redirect("/" + userId)
})

router.get("/:userId", (req, res) => {
    res.render("profile")
})

module.exports = router
