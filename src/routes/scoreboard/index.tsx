import { Team } from "./components/team";

export function Scoreboard () {
    return (
        <div className="flex-1 p-8 flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Tabela</h1>
                <div className="flex items-center relative">
                    <div className="flex flex-col gap-2">
                        <Team
                            team={{
                                id: "1",
                                name: "LOUD",
                                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/LOUD_logo.svg/1200px-LOUD_logo.svg.png",
                                score: "2",
                            }}
                        />
                        <Team
                            team={{
                                id: "2",
                                name: "Furia",
                                logo: "https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png",
                                score: "1",
                            }}
                        />
                    </div>
                    <div className="absolute left-[calc(10%)] top-[calc(50%)] w-10 h-32 border-t border-white border-r" />
                </div>
                <div className="flex items-center relative">
                    <div className="flex flex-col gap-2">
                        <Team
                            team={{
                                id: "1",
                                name: "LOUD",
                                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/LOUD_logo.svg/1200px-LOUD_logo.svg.png",
                                score: "0",
                            }}
                        />
                        <Team
                            team={{
                                id: "2",
                                name: "Furia",
                                logo: "https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png",
                                score: "2",
                            }}
                        />
                    </div>
                    <div className="absolute left-[calc(10%)] bottom-[calc(50%)] w-10 h-32 border-b border-white border-r" />
                    <div className="absolute left-[calc(12.2%)] top-[calc(0%)] border-t border-white w-10 h-px" />
                    <div className="flex items-center">
                    <div className="flex flex-col gap-2 absolute left-[calc(15%)] top-[calc(-50%)]">
                        <Team
                            team={{
                                id: "1",
                                name: "LOUD",
                                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/LOUD_logo.svg/1200px-LOUD_logo.svg.png",
                                score: "3",
                            }}
                        />
                        <Team
                            team={{
                                id: "2",
                                name: "Furia",
                                logo: "https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png",
                                score: "2",
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
