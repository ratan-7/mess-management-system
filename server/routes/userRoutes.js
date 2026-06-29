const express = require("express")
const router = express.Router()

const { getAllUsers, approveUser, changeRole } = require("../controller/userController")

router.get("/users", getAllUsers)
router.patch("/user/:id/approve", approveUser)
router.patch("/user/:id/role", changeRole)

module.exports = router