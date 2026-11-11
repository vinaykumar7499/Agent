import api from "@/api"

export const login = async (token) => {
    const { data } = await api.post("/api/auth/login", { token })
    return data
}

export const logout = async () => {
    try {
        const { data } = await api.get("/api/auth/logout")
        console.log(data)
        return data
    }
    catch (err) {
        console.log("logout api frontend error", err)
        throw err
    }
}

export const me = async () => {
    try {
        const { data } = await api.get("/api/auth/me")
        return data
    }
    catch (err) {
        console.log("me api frontend error", err)
        throw err
    }
}
