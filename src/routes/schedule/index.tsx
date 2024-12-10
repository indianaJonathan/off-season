import { matches } from "../../lib/data";
import { Match as MatchType } from "../../lib/types";
import { Match } from "./components/match";

export function Schedule () {
    return (
        <div className="flex-1 p-8 flex flex-col gap-2 ">
            <h1 className="text-2xl font-semibold">Cronograma</h1>
            <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-4 gap-2">
                    {matches.map((match: MatchType) => (
                        <Match
                            key={`match-${match.id}`}
                            team1={match.teams[0]}
                            team2={match.teams[1]}
                            time={match.date.toLocaleDateString() + " " + match.date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
                            match={match}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
