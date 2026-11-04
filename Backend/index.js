import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import connectDb from "./Config/db.js"
import authRouter from "./routes/auth.route.js"

dotenv.config()
console.log(process.env.MONGODB_URI);

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5137",
    credentials: true
}))

app.use("/api/auth", authRouter)

const port = Number(process.env.PORT || 8000)
if (!Number.isInteger(port) || port < 0 || port > 65535) {
    throw new Error("PORT must be a number between 0 and 65535")
}

const startServer = async () => {
    await connectDb()
    app.listen(port, () => {
        console.log(`Server started on port ${port}`)
    })
}

startServer().catch((error) => {
    console.error("Failed to start server:", error)
    process.exitCode = 1
})