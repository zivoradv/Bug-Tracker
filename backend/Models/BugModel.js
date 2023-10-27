const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const bugSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a name"]
        },
        description: {
            type: String,
            required: [true, "Please enter a description"]
        },
        priority: {
            type: String,
            required: [true, "Please add a priority"]
        },
        user: {
            type: String,
            required: [true, "Please add a user"]
        }
    }
) 

const Bug = mongoose.model("Bug", bugSchema)

module.exports = Bug;