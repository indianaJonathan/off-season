import { Link, useLocation } from "react-router-dom";

interface NavbarLinkProps {
    href: string;
    children: React.ReactNode;
    shouldHighlight?: boolean;
}

export function NavbarLink ({ href, children, shouldHighlight = true }: NavbarLinkProps) {
    const location = useLocation();

    function isActive (href: string) {
        return location.pathname === href;
    }

    return (
        <Link
            to={href}
            className={`px-2 py-1 hover:bg-white/10 cursor-pointer select-none ${ shouldHighlight && isActive(href) ? 'border-b border-white/50' : '' }`}
        >
            {children}
        </Link>
    );
}
