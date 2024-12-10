import { MatchTeam, Match as MatchType } from "../../../lib/types";

interface MatchProps {
    team1: MatchTeam;
    team2: MatchTeam;
    time: string;
    match: MatchType;
}

export function Match ({ team1, team2, time, match }: MatchProps) {
    return (
        <div className="flex flex-col items-center gap-2 border border-zinc-500 p-4 rounded relative h-fit pt-10">
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
            <div className="flex flex-col gap-1 divide-y divide-zinc-300 w-full">
                {match.maps.map((map) => {
                    if (map.score) return (
                        <div className="flex flex-col gap-1 w-full items-center justify-center">
                            <div className="flex items-center justify-center">
                                <span className="font-semibold">{map.map.name}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <img
                                        src={map.score[0].team.logo}
                                        alt={map.score[0].team.name}
                                        className="size-5 object-scale-down"
                                    />
                                    <span className="font-semibold">{map.score[0].score}</span>
                                </div>
                                <span className="text-sm">x</span>
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold">{map.score[1].score}</span>
                                    <img
                                        src={map.score[1].team.logo}
                                        alt={map.score[1].team.name}
                                        className="size-5 object-scale-down"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                )}
            </div>
            <div className="absolute top-0 left-0 h-fit w-full flex items-center justify-center bg-zinc-500">
                <span>{time}h</span>
            </div>
        </div>
    );
}
