import { Link } from "react-router-dom"
import { ArrowLeft, Workflow } from "lucide-react"
const CreateAgent = () => {
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
                    <ArrowLeft size={14}/>
                    <span >Back to chat</span>
                    </Link>
                </header>

            </div>
        </div>
    )
}
export default CreateAgent