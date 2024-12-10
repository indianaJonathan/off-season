import { useEffect, useState } from "react";
import { matches } from "../../lib/data";
import { Match } from "../../lib/types";

export function Broadcast () {
    const [currentMatch, setCurrentMatch] = useState<Match | null>(null);

    function getCurrentMatch () {
        const todayMatches = matches.filter((m) => m.date.getDate() === new Date().getDate());

        if (todayMatches.length > 0) {
            const currentTime = new Date().getTime();
            return todayMatches.filter((m) => m.date.getTime() < currentTime).sort((a, b) => a.date.getTime() - b.date.getTime())[0];
        }
        return null;
    }

    function getChampionshipDate (date: number) {
        switch (date) {
            case 9:
                return "Dia 1";
            case 10:
                return "Dia 2";
            case 11:
                return "Dia 3";
            case 12:
                return "Dia 4";
            case 13:
                return "Dia 5";
            case 14:
                return "Dia 6";
            case 15:
                return "Finais";
            default:
                return "";
        }
    }

    useEffect(() => {
        setCurrentMatch(getCurrentMatch());
    }, []);

    return (
        <div className="flex-1 flex flex-col">
            <iframe
                src={`https://player.twitch.tv/?channel=tixinhadois&parent=${import.meta.env.VITE_APP_TWITCH_PARENT}`}
                height="500px"
                width="100%"
                allowFullScreen={true}
            >
            </iframe>
            <div className="w-full h-px bg-zinc-500" />
            {currentMatch && (
                <div className="p-8 flex-1">
                    <h1 className="text-2xl font-semibold">{currentMatch.teams[0].team.name} vs {currentMatch.teams[1].team.name} - {getChampionshipDate(currentMatch.date.getDate())}</h1>
                    <div className="flex flex-wrap gap-4 items-center">
                        {currentMatch.maps.map((map) => (
                            <div className="flex gap-4 items-center justify-center overflow-hidden w-52 h-64 relative rounded-lg">
                                <img
                                    src={map.map.image}
                                    className="w-full h-full object-cover opacity-30"
                                />
                                <div className="absolute top-0 left-0 flex flex-col gap-2 items-center justify-center w-full h-full">
                                    <img src={map.team.team.logo} alt={map.team.team.name} className="size-8 object-scale-down" />
                                    <span className="font-semibold text-xl">{map.map.name}</span>
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={currentMatch.teams.filter((t) => t.team.id !== map.team.team.id)[0].team.logo}
                                            alt={map.team.team.name}
                                            className="size-8 object-scale-down"
                                        />
                                        <span className="font-semibold">{map.side === "attacker" ? "Atacantes" : "Defensores"}</span>
                                    </div>
                                    {map.score && (
                                        <div className="flex items-center gap-2 mt-5">
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
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {!currentMatch && (
                <div className="flex-1 flex items-center justify-center rounded-md border border-dashed border-zinc-500 m-8">
                    <h1 className="text-2xl font-semibold italic text-zinc-500">Nenhuma partida em andamento</h1>
                </div>
            )}
        </div>
    );
}
