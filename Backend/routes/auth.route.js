import express from "express"
import protect from "../middleware/protect.js"
import { login, logout, me } from "../controllers/auth.controller.js"

const authRouter = express.Router();
authRouter.post("/login", login);
authRouter.get("/logout", logout);
authRouter.post("/logout", logout);
authRouter.get("/me", protect, me);

export default authRouter
