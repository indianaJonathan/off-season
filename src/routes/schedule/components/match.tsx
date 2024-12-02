import { MatchTeam } from "../../../lib/types";

interface MatchProps {
    team1: MatchTeam;
    team2: MatchTeam;
    time: string;
}

export function Match ({ team1, team2, time }: MatchProps) {
    return (
        <div className="flex items-center gap-2 border border-zinc-500 p-4 rounded">
            <div className="flex-1 flex items-center justify-center gap-3">
                <div className="flex items-center gap-2 select-none" title={team1.team.name}>
                    <img src={team1.team.logo} alt={team1.team.name} className="w-8 h-8 object-scale-down" />
                    <span className="font-semibold text-lg">{team1.team.symbol}</span>
                    <span>{team1.score}</span>
                </div>
                <span className="font-light text-sm">X</span>
                <div className="flex items-center gap-2 select-none" title={team2.team.name}>
                    <span>{team2.score}</span>
                    <span className="font-semibold text-lg">{team2.team.symbol}</span>
                    <img src={team2.team.logo} alt={team2.team.name} className="w-8 h-8 object-scale-down" />
                </div>
            </div>
            <span>{time}h</span>
        </div>
    );
}
