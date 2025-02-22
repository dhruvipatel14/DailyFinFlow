const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const getUserProfile = async (req, res) => {
    try {

        const userId = req.user.id;
        const user = await prisma.users.findUnique({
            where: { id: userId },
            select: {
                id: true,
                name: true,
                email: true,
                googleId: true,
                createdAt: true
            }
        })

        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }

        return res.status(200).json({ user })

    }
    catch (error) {
        console.err('Error fetching user profile', error)
        return res.status(500).json({ error: 'Failed to fetch user profile' })
    }
}

module.exports = { getUserProfile }