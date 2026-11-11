import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import connectDb from "./Config/db.js"
import authRouter from "./routes/auth.route.js"

dotenv.config()

const app = express()
app.use(express.json())
app.use(cookieParser())

const allowedOrigins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:5174",
    "http://127.0.0.1:5174",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    process.env.FRONTEND_URL?.replace(/\/$/, "")
].filter(Boolean)

app.use(cors({
    origin: (origin, callback) => {
        if (!origin) return callback(null, true)
        if (
            allowedOrigins.includes(origin) ||
            /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)
        ) {
            return callback(null, true)
        }
        return callback(null, false)
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
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
