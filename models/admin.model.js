const { Schema, model } = require("mongoose")

const adminSchema = new Schema({
    email: { type: String, required: [true, "Email is required!"] },
    password: { type: String, required: [true, "Password is required!"] }
})

module.exports = model("Admin", adminSchema, 'admin')