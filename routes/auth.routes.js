const auth = require("../controllers/auth.controller")

const router = require("express").Router()

router.post("/login", auth.login)


module.exports = router