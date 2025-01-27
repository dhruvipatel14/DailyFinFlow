const express = require("express")
const { body } = require("express-validator");

const { signup, login, googleAuth } = require("../controllers/authController");
const passport = require("passport");

router = express.Router()

router.post("/signup",
    [
        body("name").notEmpty().withMessage("Name is required"),
        body("email").isEmail().withMessage("Invalid email"),
        body("password").isLength({ min: 6, max: 15 }).withMessage("Password lenght must be between 6 to 15.")
    ],
    signup)

router.post("/login",
    [
        body("email").isEmail().withMessage("Invalid email"),
        body("password").notEmpty().withMessage("Password is required"),
    ],
    login)

router.post('/google',
    googleAuth)


module.exports = router;