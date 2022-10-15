const User = require("../models/user.model")
const usersController = {
    // Create User
    async createUser(req, res) {
        const { name, fatherName, motherName, address, issueDate } = req.body
        if (!name || !fatherName || !motherName || !address || !issueDate) {
            return res.status(400).json({ message: "All fields are required!" })
        }
        try {
            const user = new User({
                name,
                fatherName,
                motherName,
                address,
                issueDate
            })
            const newUser = await user.save()
            const url = `${process.env.CLIENT_URL}/c/t/${newUser._id}`
            res.status(201).json({ message: "User created successfully!", data: url })
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    },
    // Get all users
    async getUsers(_req, res) {
        console.log("hello")
        try {
            const users = await User.find()
            console.log("user", users)
            res.status(200).json({ data: users.length })
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    },
    // Get Single User
    async getUser(req, res) {
        const { id } = req.params
        try {
            const user = await User.findById(id)
            if (!user) {
                return res.status(404).json({ message: "User not found!" })
            }
            console.log(user)
            res.status(200).json({ message: " Successful Trainee Information", data: user })
        } catch (err) {
            res.status(500).json({ message: err.message })
        }

    }
}

module.exports = usersController