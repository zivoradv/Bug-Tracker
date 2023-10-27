const User = require('../Models/UserModel')

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const getUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findByIdAndDelete(id)
        res.status(200).json("User deleted successfully")
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const updateUser = async (req, res) => {
    try{
        const { id } = req.params
        const user = await User.findByIdAndUpdate(
            {_id: id},
            req.body,
            {
                new: true,
                runValidators: true
            }
        )
        if(!user){
            res.status(404).json(`No task with that id.`)
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

module.exports = {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser
}