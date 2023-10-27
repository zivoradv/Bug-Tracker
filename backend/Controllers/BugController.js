const Bug = require('../Models/BugModel')

const createBug = async (req, res) => {
    try {
        const bug = await Bug.create(req.body)
        res.status(200).json(bug)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const getBugs = async (req, res) => {
    try {
        const bug = await Bug.find()
        res.status(200).json(bug)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const getBug = async (req, res) => {
    try {
        const { id } = req.params
        const bug = await Bug.findById(id)
        res.status(200).json(bug)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const deleteBug = async (req, res) => {
    try {
        const { id } = req.params
        const bug = await Bug.findByIdAndDelete(id)
        res.status(200).json("User deleted successfully")
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const updateBug = async (req, res) => {
    try{
        const { id } = req.params
        const bug = await Bug.findByIdAndUpdate(
            {_id: id},
            req.body,
            {
                new: true,
                runValidators: true
            }
        )
        if(!bug){
            res.status(404).json(`No task with that id.`)
        }
        res.status(200).json(bug)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

module.exports = {
    createBug,
    getBugs,
    getBug,
    deleteBug,
    updateBug
}