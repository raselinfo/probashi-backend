const Admin = require("../models/admin.model")
const auth = {
    async login(req, res) {
        const { email, password } = req.body
        console.log("Eamil", email, password)
        const admin = await Admin.findOne({ email: email })
        if ((admin?.email !== email) || admin?.password !== password) {
            return res.status(401).json({ message: "Authentication Failed" })
        }
        return res.status(200).json({ message: "Login Successful", data: { email: admin.email } })
    }
}

module.exports = auth