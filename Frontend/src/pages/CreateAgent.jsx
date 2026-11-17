import { Link } from "react-router-dom"
import { ArrowLeft, Workflow, Bot } from "lucide-react"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
const availableTools = [
    {
        id: "calculator",
        name: "Calculator",
        description: "Perform mathematical calculations",
    },
    {
        id: "web.search",
        name: "Web Search",
        description: "Search for information on the web",
    },
    {
        id: "gmail.read",
        name: "Read Emails",
        description: "Read and summarize emails",
    },
    {
        id: "gmail.send",
        name: "Send Emails",
        description: "Draft and send emails",
    },
];

const darkPanel = "border border-white/10 bg-white/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl";
const fieldCls =
    "rounded-xl border-white/10 bg-white/[0.04] text-sm text-white backdrop-blur-xl placeholder:text-zinc-500 focus-visible:border-white/25 focus-visible:ring-0";
const CreateAgent = () => {
    const [name, setname] = useState("")
    const [instruction, setinstruction] = useState("")
    const [KnowledgeBase, setKnowledgeBase] = useState("")
    const [Tools, setTools] = useState([])
    const toggelTool = (tools) => {
        setTools((prevTools) =>
            prevTools.includes(tools) ? prevTools.filter((t) => t !== tools) : [...prevTools, tools]
        )

    }
    return (
        <div className="relative min-h-screen bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,#2b2f3a_0%,#191b21_55%,#121317_100%)] px-6 py-10 text-white">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.35)_100%)]"
            />
            <div className="relativevz-10">
                {/* Header */}
                <header className="z-30 flex h-16 shrink-0 items-center justify-between px-4 sm:px-6">
                    <Link to="/" className="flex items-center gap-2.5">
                        <span className="grid size-8 place-items-center rounded-lg bg-white text-zinc-900">
                            <Workflow size={17} />
                        </span>
                        <span className="text-sm font-medium tracking-tight">
                            Automate AI
                        </span>
                    </Link>
                    <Link to="/" className="flex items-center gap-2 rounded-xl border-white/10 bg-white/[0.05] px-3
                    py-2 text-xs text-zinc-300 transition hover:bg-white/10 hover:text-white">
                        <ArrowLeft size={14} />
                        <span >Back to chat</span>
                    </Link>
                </header>
                <main className="mx-auto w-full max-w-2xl px-5 pb-12 pt-10 sm:px-8 sm:pt-14">
                    <div className="mb-9">
                        <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-white text-zinc-900 shadow-[0_10px_14px_rgba(255_255_255_0.12)]">
                            <Bot size={24} />
                        </div>
                        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                            create the agent
                        </h1>
                        <p className="mt-2 text-sm text-zinc-500">
                            Configure Your Ai Agent And Define What It Can Do
                        </p>
                    </div>
                    <form className={`space-y-7 rounded-3xl p-5 sm:p-7 ${darkPanel}`}>
                        <section className="space-y-5">
                            <div>
                                <label htmlFor="agent-name" className="mb-2 block text-xs font-medium text-zinc-300">
                                    Agent Name
                                </label>
                                <Input
                                    onChange={(e) => setname(e.target.value)}
                                    value={name}
                                    placeholder="e.g. Research Assistant "
                                    maxLength={100}
                                    required
                                    className={`h-11 ${fieldCls}`}
                                />
                            </div>
                            <div>
                                <label htmlFor="intructions" className="mb-2 block text-xs font-medium text-zinc-300">
                                    intructions...
                                </label>
                                <Input
                                    onChange={(e) => setinstruction(e.target.value)}
                                    value={instruction}
                                    placeholder="intructions"
                                    maxLength={100}
                                    required
                                    className={`h-11 ${fieldCls}`}
                                />
                            </div>
                            <div>
                                <label htmlFor="KnowledgeBase " className="mb-2 block text-xs font-medium text-zinc-300">
                                    KnowledgeBase
                                </label>
                                <Textarea placeholder="KnowledgeBase"
                                    onChange={(e) => setKnowledgeBase(e.target.value)}
                                    value={KnowledgeBase}
                                    maxLength={100}
                                    required
                                    className={`h-11 ${fieldCls}`}
                                />
                            </div>
                        </section>
                        <section>
                            <div className="mb-3">
                                <h2 className="text-xs font-medium text-zinc-300">
                                    Tools
                                </h2>
                                <p className="mt-1 text-xstext-zinc-500">
                                    Select  the Capablities available to your  agent
                                </p>
                            </div>
                            <div className="overflow-hidden rounded-2xl border border-white/10">
                                {

                                    availableTools.map((t, i) => {

                                        const seleected = Tools.includes(t.id)
                                        return (

                                            <button
                                                type="button"
                                                onClick={() => toggelTool(t.id)}

                                                className={`flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left transition ${i !== 0 ? "border-t border-white/[0.08]" : ""
                                                    } ${seleected
                                                        ? "bg-white/[0.09]"
                                                        : "bg-white/[0.02] hover:bg-white/[0.05]"
                                                    }`}
                                            >
                                            </button>

                                        )
                                    })
                                }
                            </div>
                        </section>
                    </form>
                </main>
            </div>
        </div>
    )
}
export default CreateAgent