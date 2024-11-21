import { Navbar } from "../navbar";

interface PageProps {
    children: React.ReactNode | React.ReactNode[];
}

export function Page ({ children }: PageProps) {
    return (
        <div className="w-full flex flex-col h-screen">
            <Navbar />
            {children}
        </div>
    )
}
