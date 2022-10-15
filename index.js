require("dotenv").config()
const express = require("express")
const cors = require("cors")
const db = require("./db/db")
const app = express()
const PORT = process.env.PORT || 4000
// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// DB
db.connect().then(({ connection: { host, port, name } }) => {
    console.log(`📙 ${name}: is connected at ${host}:${port}`)
    app.listen(PORT, () => {
        console.log(`🚀 http://localhost:${PORT}`)
    })
}).catch(err => {
    console.log("Error", err)
})

// Routes
app.use("/api", require("./routes/auth.routes"))
app.use("/api",require("./routes/user.routes"))

app.get("/health", (_req, res) => {
    res.send("<h1>OK RAsel</h1>")
})


