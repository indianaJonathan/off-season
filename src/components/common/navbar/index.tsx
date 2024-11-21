import { Circle } from "lucide-react";
import { NavbarLink } from "./navbar-link";

export function Navbar () {
    return (
        <nav
            className="w-full p-4 flex items-center justify-between gap-8 bg-zinc-800"
        >
            <NavbarLink href="/" shouldHighlight={false}>
                <span className="font-semibold text-xl">OFF//SEASON</span>
            </NavbarLink>
            <div className="flex-1 flex items-center gap-4">
                <NavbarLink href="/schedule">
                    <span>Cronograma</span>
                </NavbarLink>
                <NavbarLink href="/scoreboard">
                    <span>Tabela</span>
                </NavbarLink>
            </div>
            <NavbarLink href="/broadcast" shouldHighlight={false}>
                <div className="flex items-center gap-2 px-3 py-2 bg-red-500 rounded-lg">
                    <Circle className="text-white size-4 animate-pulse" fill="currentColor"/>
                    <span>Ao vivo</span>
                </div>
            </NavbarLink>
      </nav>
    );
}
