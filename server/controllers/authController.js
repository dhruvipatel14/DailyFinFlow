const jwt = require('jsonwebtoken')
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs")

const prisma = new PrismaClient()

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" })
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

        const { password: _, ...userWithOutPassword } = newUser

        res.status(201).json({ message: "User created successfully", userWithOutPassword })

    }
    catch (error) {
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

        const token = generateToken(user.id)

        res.status(200).json({ message: "Login succssful", token })
    }
    catch (error) {
        res.status(500).json({ error: "Something went wrong." })
    }


}

module.exports = {signup, login}