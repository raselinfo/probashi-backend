const mongoose = require("mongoose")
const db = {
    async connect() {
        return await mongoose.connect(process.env.MONGO_URL, {
            dbName: process.env.DB_NAME,
            user: process.env.DB_USER,
            pass: process.env.DB_PASS,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    }
}

module.exports = db