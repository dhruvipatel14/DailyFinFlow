const express = require('express');
const cors = require('cors')
require("dotenv").config();

const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')


const app = express()

// Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("api/users", userRoutes);
app.use("api/auth", authRoutes);

// Default 

app.get("/", (req, res) => {
    res.send("Welcome to backend server")
})

module.exports = app;

