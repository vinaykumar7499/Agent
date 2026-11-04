import mongoose from "mongoose"
import { Resolver } from "node:dns/promises"

const createDirectMongoUri = async (srvUri) => {
    const resolver = new Resolver()
    resolver.setServers(["1.1.1.1", "1.0.0.1"])

    const [records, txtRecords] = await Promise.all([
        resolver.resolveSrv(`_mongodb._tcp.${srvUri.hostname}`),
        resolver.resolveTxt(srvUri.hostname)
    ])

    if (records.length === 0 || txtRecords.length > 1) {
        throw new Error("MongoDB Atlas returned invalid SRV/TXT DNS records")
    }

    const options = new URLSearchParams(txtRecords[0]?.join("") ?? "")
    for (const [key, value] of srvUri.searchParams) {
        options.set(key, value)
    }
    if (!options.has("tls") && !options.has("ssl")) {
        options.set("tls", "true")
    }

    const hosts = records
        .map(({ name, port }) => `${name.replace(/\.$/, "")}:${port}`)
        .join(",")
    const credentials = srvUri.username || srvUri.password
        ? `${srvUri.username}:${srvUri.password}@`
        : ""

    return `mongodb://${credentials}${hosts}${srvUri.pathname}?${options.toString()}`
}

const connectDb = async () => {
    const mongoUri = process.env.MONGODB_URI?.trim()
    if (!mongoUri) {
        throw new Error("MONGODB_URI is missing from the Backend .env file")
    }

    let parsedUri
    try {
        parsedUri = new URL(mongoUri)
    } catch {
        throw new Error("MONGODB_URI is not a valid MongoDB connection URL")
    }

    if (!["mongodb:", "mongodb+srv:"].includes(parsedUri.protocol) || !parsedUri.hostname) {
        throw new Error("MONGODB_URI must be a valid mongodb:// or mongodb+srv:// URL")
    }

    try {
        const connectionUri = parsedUri.protocol === "mongodb+srv:"
            ? await createDirectMongoUri(parsedUri)
            : mongoUri
        await mongoose.connect(connectionUri)
        console.log("Database connected")
    }
    catch (error) {
        console.error("Database connection failed:", error.message)
        throw error
    }
}
export default connectDb