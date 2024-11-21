type Team = {
    id: string;
    name: string;
    logo: string;
}

interface MatchProps {
    team1: Team;
    team2: Team;
    time: string;
}

export function Match ({ team1, team2, time }: MatchProps) {
    return (
        <div className="flex items-center gap-2 border border-zinc-500 p-4 rounded">
            <div className="flex-1 flex items-center justify-center gap-3">
                <div className="flex items-center gap-2">
                    <img src={team1.logo} alt={team1.name} className="w-8 h-8" />
                    <span className="font-semibold text-lg">{team1.name}</span>
                </div>
                <span className="font-light text-sm">X</span>
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-lg">{team2.name}</span>
                    <img src={team2.logo} alt={team2.name} className="w-8 h-8" />
                </div>
            </div>
            <span>{time}h</span>
        </div>
    );
}
