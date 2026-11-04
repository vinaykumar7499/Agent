import jwt from "jsonwebtoken"
import User from "../Models/user.model.js"

const protect = async (req, res, next) => {
    const token = req.cookies?.token
    if (!token) {
        return res.status(401).json({
            message: "unauthorized"
        })
    }

    if (!process.env.JWT_SECRET) {
        console.error("JWT_SECRET is not configured")
        return res.status(500).json({
            message: "internal server error"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (typeof decoded === "string" || typeof decoded.userId !== "string") {
            return res.status(401).json({
                message: "unauthorized"
            })
        }

        const user = await User.findById(decoded.userId)
        if (!user) {
            return res.status(401).json({
                message: "unauthorized"
            })
        }

        req.user = user
        return next()

    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({
                message: "unauthorized"
            })
        }

        console.error("Authentication middleware failed:", error)
        return res.status(500).json({
            message: "internal server error"
        })
    }
}

export default protect