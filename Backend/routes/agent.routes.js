import express from "express"
import protect from "../middleware/protect.js"
import { CreateAgent, deleteAgent, getAgentById, getAllAgents } from "../controllers/agent.controller.js";

const agentRouter = express.Router();
agentRouter.post("/",protect, CreateAgent);
agentRouter.get("/all",protect, getAllAgents);
// authRouter.post("/logout", logout);
agentRouter.get("/:id", protect, getAgentById);
agentRouter.delete("/:id", protect, deleteAgent);
export default agentRouter
