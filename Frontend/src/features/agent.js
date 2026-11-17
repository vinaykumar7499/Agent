import api from "@/api"

export const createAgent = async ({name, knowledgebase, instruction, tools}) => {
    const { data } = await api.post("/api/agent", { name, knowledgebase, instruction, tools})
    return data
}

export const getAllAgents = async () => {
    try {
        const { data } = await api.get("/api/agent/all")
        return data
    }
    catch (err) {
        console.log("agent api frontend error", err)
        throw err
    }
}

export const getAgentById= async (id) => {
    try {
        const { data } = await api.get(`/api/agent/${id}`)
        return data
    }
    catch (err) {
        console.log("id api frontend error", err)
        throw err
    }
}
export const deleteAgent= async (id) => {
    try {
        const { data } = await api.delete(`/api/agent/${id}`)
        return data
    }
    catch (err) {
        console.log("id api frontend error", err)
        throw err
    }
}


