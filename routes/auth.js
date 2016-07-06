const express = require("express")
const bodyParser = require("body-parser")

const router = express.Router()

// Middleware
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

router.post("/", (req, res) => {
    if ((req.body.username === "Player 1" || req.body.username === "Player 2") && req.body.password === "test") {

        let userId = (req.body.username === "Player 1") ? 1 : 2
        res.redirect("/profile/" + userId)
    }
    else {
        res.status(403).send("Wrong Login/Password.")
    }
})

module.exports = router
