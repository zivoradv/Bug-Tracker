const express = require("express")
const { createBug, getBugs, getBug, deleteBug, updateBug } = require("../Controllers/BugController")
const router = express.Router()

//Create a user
router.post("/" , createBug)

//Get all users
router.get("/" , getBugs)

//Get user
router.get("/:id" , getBug)

//Delete user
router.delete("/:id" , deleteBug)

//Update user
//If you want to update single column use patch instead of put
router.put("/:id" , updateBug)

module.exports = router