const jwt = require('jsonwebtoken')
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const { OAuth2Client } = require('google-auth-library');
const axios = require('axios')


const prisma = new PrismaClient()
const GOOGLE_USERINFO_URL = 'https://www.googleapis.com/oauth2/v3/userinfo';

const googleClient = new OAuth2Client({
    clientId: process.env['GOOGLE_CLIENT_ID'],
    clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
})


const generateToken = (id, email) => {
    return jwt.sign({
        id: id,
        email: email
    }, process.env.JWT_SECRET, { expiresIn: "1h" })
}

const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {

        const existingUser = await prisma.users.findUnique({
            where: {
                email: email
            }
        })
        if (existingUser) {
            return res.status(400).json({ error: "Email already in use" });
        }

        const hasedPassword = await bcrypt.hash(password, 10)
        const newUser = await prisma.users.create({
            data: {
                email,
                name,
                password: hasedPassword
            }
        })
        
        const token = generateToken(newUser.id, newUser.email)

        res.status(201).json({ message: "User created successfully", token })

    }
    catch (error) {
        console.log(err)
        res.status(500).json({ error: "Something went wrong." });
    }
}

const login = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await prisma.users.findUnique({
            where: { email: email }
        })

        if (!user) {
            return res.status(400).json({ error: "User not found." });
        }

        const isValidPassword = await bcrypt.compare(password, user.password)

        if (!isValidPassword) {
            return res.status(400).json({ error: "Invalid credentials." });
        }

        const token = generateToken(user.id, user.email)

        res.status(200).json({ message: "Login succssful", token })
    }
    catch (error) {
        res.status(500).json({ error: "Something went wrong." })
    }


}

// Google Authentication


const googleAuth = async (req, res) => {
    try {
        const { token } = req.body;

        if (!token) {
            return res.status(400).json({ error: 'Access token is required.' });
        }

        const googleUserInfo = await axios.get(GOOGLE_USERINFO_URL, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const { sub: googleId, email, name } = googleUserInfo.data

        let user = await prisma.users.findUnique({
            where: {
                googleId: googleId
            }
        })

        if (!user) {
            user = await prisma.users.create({
                data: {
                    email: email,
                    name: name,
                    googleId: googleId
                }
            })
        }

        const accessToken = generateToken(user.id, user.email)

        return res.status(200).json({ accessToken })
    }
    catch (error) {
        res.status(500).json({ error: 'Something went wrong.' })
        throw error
    }
}

module.exports = { signup, login, googleAuth }