import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bot, Plus, Settings, Settings2, UserRound, Workflow } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const hideScrollbar =
    "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";

const darkPanel =
    "border border-white/10 bg-white/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl";

const menuContent =
    "rounded-2xl border border-white/10 bg-[#1d2026]/95 p-1.5 text-zinc-100 shadow-2xl shadow-black/50 backdrop-blur-xl";

const menuItem =
    "rounded-xl text-zinc-300 focus:bg-white/10 focus:text-white";

const menuSeparator = "bg-white/10";

const iconBtn =
    "size-9 rounded-xl border border-white/10 bg-white/[0.05] p-0 text-zinc-300 hover:bg-white/10 hover:text-white";

const whiteBtn =
    "rounded-xl border-0 bg-white text-zinc-900 hover:bg-zinc-200 hover:text-zinc-900";


const Home = () => {
    const { userData } = useSelector(state => state.user)
    return (
        <div className="relative min-h-screen bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,#2b2f3a_0%,#191b21_55%,#121317_100%)] px-6 py-10 text-white">

            {/* Background Overlay */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.35)_100%)]"
            />

            {/* Main Content */}
            <div className="relative z-10 flex min-h-0 flex-1 flex-col">

                {/* Header */}
                <header className="z-30 flex h-16 shrink-0 items-center justify-between px-4 sm:px-6">

                    <Link to="/" className="flex items-center gap-2.5">
                        <span className="grid size-8 place-items-center rounded-lg bg-white text-zinc-900">
                            <Workflow size={17} />
                        </span>

                        <span className="text-sm font-medium tracking-tight">
                            Automate Ai
                        </span>
                    </Link>

                    <div className="flex items-center gap-2.5">

                        <div className="flex items-center gap-2.5">
                            <DropdownMenu>
                                <DropdownMenuTrigger
                                    render={
                                        <Button
                                            variant="outline"
                                            className={iconBtn}
                                            aria-label="Open workflow menu"
                                        />
                                    }
                                >
                                    <Workflow size={17} />
                                </DropdownMenuTrigger>

                                <DropdownMenuContent
                                    align="end"
                                    className={`w-56 ${menuContent}`}
                                >
                                    <DropdownMenuGroup>
                                        <DropdownMenuLabel className="px-3 py-2 text-xs text-zinc-500">
                                            Workspace
                                        </DropdownMenuLabel>
                                        <DropdownMenuSeparator className={menuSeparator} />
                                        <DropdownMenuItem
                                            render={
                                                <Link
                                                    className="flex items-center gap-2.5 py-2.5"
                                                    to="/agents"
                                                />
                                            }
                                        >
                                            <Bot size={17} />
                                            My Agents
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator className={menuSeparator} />
                                        <DropdownMenuItem
                                            render={
                                                <Link
                                                    className="flex items-center gap-2.5 py-2.5"
                                                    to="/agents/create"
                                                />
                                            }
                                        >
                                            <Plus size={17} />
                                            Create New
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator className={menuSeparator} />
                                        <DropdownMenuItem
                                            render={
                                                <Link
                                                    className="flex items-center gap-2.5 py-2.5"
                                                    to="/agents/create"
                                                />
                                            }
                                        >
                                            <Settings2 size={17} />
                                            Integration
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>


                            <DropdownMenu>
                                <DropdownMenuTrigger
                                    render={
                                        <button
                                            type="button"
                                            aria-label="Open profile menu"
                                            className="flex size-9 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.05] text-zinc-300 hover:bg-white/10 hover:text-white"
                                        />
                                    }
                                >
                                    {userData?.profilePicture ? (
                                        <img
                                            src={userData.profilePicture}
                                            alt="Profile"
                                            referrerPolicy="no-referrer"
                                            className="size-full rounded-xl object-cover"
                                        />
                                    ) : (
                                        <UserRound size={18} />
                                    )}
                                </DropdownMenuTrigger>

                                <DropdownMenuContent
                                    align="end"
                                    className={`w-56 ${menuContent}`}
                                >
                                    <div className="flex items-center gap-3 px-3 py-3">
                                        <div className="min-w-0 flex-1">
                                            <p className="truncate text-sm font-medium">
                                                {userData?.name || "User"}
                                            </p>
                                            <p className="truncate text-xs text-zinc-500">
                                                {userData?.email || ""}
                                            </p>
                                        </div>
                                    </div>

                                    <DropdownMenuSeparator className={menuSeparator} />

                                    <DropdownMenuGroup>
                                        <DropdownMenuItem
                                            render={
                                                <Link
                                                    className="flex items-center gap-2.5 py-2.5"
                                                    to="/agents"
                                                />
                                            }
                                        >
                                            <Bot size={17} />
                                            My Agents
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator className={menuSeparator} />
                                        <DropdownMenuItem
                                            render={
                                                <Link
                                                    className="flex items-center gap-2.5 py-2.5"
                                                    to="/agents/create"
                                                />
                                            }
                                        >
                                            <Plus size={17} />
                                            Create New
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator className={menuSeparator} />
                                        <DropdownMenuItem
                                            render={
                                                <Link
                                                    className="flex items-center gap-2.5 py-2.5"
                                                    to="/agents/create"
                                                />
                                            }
                                        >
                                            <Settings2 size={17} />
                                            Integration
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                    </div>
                </header>
            </div>
        </div>
    );
};

export default Home;
