const usersController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware")
const router = require("express").Router()

// Create Probashi
router.post("/create-user", authMiddleware.isAuth, usersController.createUser)
router.get("/get-users", authMiddleware.isAuth, usersController.getUsers)

router.get("/get-user/:id", usersController.getUser)

module.exports = router;