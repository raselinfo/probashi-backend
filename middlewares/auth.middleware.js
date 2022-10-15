const Admin = require('../models/admin.model')
const authMiddleware = {
    async isAuth(req, res, next) {
        const { email } = req.query

        try {
            const admin = await Admin.findOne({ email })
            if (admin?.email !== email) {
                return res.status(401).json({ message: "Unauthorized Access! ❌" })
            }
            next()
        } catch (err) {
            res.status(500).json({ message: err.message })
        }

    }
}

module.exports = authMiddleware