import User from '../Models/user.model.js'
import jwt from "jsonwebtoken"
import { app } from '../Config/firebase.js'
import { getAuth } from 'firebase-admin/auth'

export const login = async (req, res) => {
    const { token: firebaseToken } = req.body ?? {}

    if (typeof firebaseToken !== 'string' || !firebaseToken.trim()) {
        return res.status(400).json({
            message: "token not found"
        })
    }

    let decoded
    try {
        decoded = await getAuth(app).verifyIdToken(firebaseToken)
    } catch (error) {
        console.error("Firebase token verification failed:", error)
        return res.status(401).json({
            message: "invalid or expired token"
        })
    }

    if (!decoded.name || !decoded.email) {
        return res.status(400).json({
            message: "token is missing name or email"
        })
    }

    try {
        const user = await User.findOneAndUpdate(
            { firebaseUid: decoded.uid },
            {
                $set: {
                    name: decoded.name,
                    email: decoded.email,
                    profilePicture: decoded.picture
                },
                $setOnInsert: { firebaseUid: decoded.uid }
            },
            { returnDocument: "after", upsert: true, runValidators: true }
        )

        const token = jwt.sign({ userId: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: "7d" })
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.status(200).json({
            message: "login successful",
            user
        })
    }
    catch (error) {
        console.error("Error logging in:", error)
        return res.status(500).json({
            message: "internal server error"
        })
    }
}

export const logout = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax"
        })
        return res.status(200).json({ message: "logout successful" })
    }
    catch (err) {
        console.error("Error logging out:", err)
        return res.status(500).json({ message: "internal server error" })
    }
}

export const me = async (req, res) => {
    try {
        const user = req.user
        return res.status(200).json(user)
    }
    catch (error) {
        console.error("Error in me route:", error)
        return res.status(500).json({ message: "me error" })
    }
}
