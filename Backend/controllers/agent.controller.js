
import Agent from "../Models/agent.model.js";

// CREATE AGENT
export const CreateAgent = async (req, res) => {
    try {
        const { name, knowledgebase, instruction, tools } = req.body;

        // Validate fields
        if (!name || !knowledgebase || !instruction || !tools) {
            return res.status(400).json({
                message: "Send all details"
            });
        }
        const userId = req.user?._id
        const agent = await Agent.create({
            name,
            knowledgebase,
            instruction,
            tools,
            userId
        });

        return res.status(201).json({
            message: "Agent created successfully",
            agent
        });

    } catch (err) {
        return res.status(500).json({
            message: "Create agent error",
            error: err.message
        });
    }
};


// GET ALL AGENTS
export const getAllAgents = async (req, res) => {

        const userId = req.user?._id

    
    try {
        const agents = await Agent.find({userId});

        return res.status(200).json({
            message: "Agents fetched successfully",
            agents
        });

    } catch (err) {
        return res.status(500).json({
            message: "Get all agents error",
            error: err.message
        });
    }
};



// Single agent  AGENTS
export const getAgentById = async (req, res) => {
    const agentId=req.params.id

        const userId = req.user?._id

    
    try {
        const agents = await Agent.findById(agentId);

        return res.status(200).json({
            message: "Agents fetched successfully",
            agents
        });

    } catch (err) {
        return res.status(500).json({
            message: "Get  agents by error  error",
            error: err.message
        });
    }
};



// GET Delete
export const deleteAgent = async (req, res) => {


    
    try {
        const userId = req.user?._id
    const agentId=req.params.id

        const agents = await Agent.findByIdAndDelete(agentId);

        return res.status(200).json({
            message: "Agents fetched successfully",
            agents
        });

    } catch (err) {
        return res.status(500).json({
            message: "Delete   agents error",
            error: err.message
        });
    }
};

