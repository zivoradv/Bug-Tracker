const express = require("express")
const { createUser, getUsers, getUser, deleteUser, updateUser } = require("../Controllers/UserController")
const router = express.Router()

//Create a user
router.post("/" , createUser)

//Get all users
router.get("/" , getUsers)

//Get user
router.get("/:id" , getUser)

//Delete user
router.delete("/:id" , deleteUser)

//Update user
//If you want to update single column use patch instead of put
router.put("/:id" , updateUser)

module.exports = router