import express from "express"
import protect from "../middleware/protect.js"
import { login, logout, me } from "../Controllers/auth.controller.js"

const authRouter = express.Router();
authRouter.post("/login", login);
authRouter.get("/login", logout);
authRouter.get("/me", protect, me);

export default authRouter