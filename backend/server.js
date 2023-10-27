const dotenv = require("dotenv").config()
const express = require("express")
const mongoose = require('mongoose')
const userRoute = require('./Routes/userRoute')
const bugRoute = require('./Routes/bugRoute')
const cors = require('cors');

const app = express()
app.use(cors());
app.use(express.json())

app.use("/api/users", userRoute)

app.use("/api/bugs", bugRoute)

const PORT = process.env.PORT || 5000

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`) 
        })
    })
    .catch((error) => 
        console.log(error)
    ) 
    

