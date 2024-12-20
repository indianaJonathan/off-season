import { useEffect, useState } from "react";
import { matches } from "../../lib/data";
import { Match } from "../../lib/types";

export function Broadcast () {
    const [currentMatch, setCurrentMatch] = useState<Match | null>(null);
    const [todayMatches, setTodayMatches] = useState<Match[]>([]);

    function getMatches () {
        const todayStart = new Date(new Date().setHours(0, 0, 0, 0));
        const todayEnd = new Date(new Date().setHours(23, 59, 59, 0));
        const todayMatches = matches.filter((m) => (m.date.getTime() >= todayStart.getTime() && m.date.getTime() <= todayEnd.getTime()));
        setTodayMatches(todayMatches);

        if (todayMatches.length > 0) {
            const currentTime = new Date().getTime();
            setCurrentMatch(todayMatches.filter((m) => m.date.getTime() < currentTime).sort((a, b) => b.date.getTime() - a.date.getTime())[0]);
        }
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
        getMatches();
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
            <div className="overflow-y-auto">
                {currentMatch && (
                    <div className="flex items-center gap-2">
                        <div className="p-8 flex-1">
                            <h1 className="text-2xl font-semibold">{currentMatch.teams[0].team.name} vs {currentMatch.teams[1].team.name} - {getChampionshipDate(currentMatch.date.getDate())}</h1>
                            <div className="flex flex-wrap gap-4 items-center">
                                {currentMatch.maps.map((map) => (
                                    <div key={`match-${currentMatch.id}-${map.id}`} className={`flex gap-4 items-center justify-center overflow-hidden w-52 h-64 relative rounded-lg`}>
                                        <img
                                            src={map.map.image}
                                            className="w-full h-full object-cover opacity-30"
                                        />
                                        <div className={`absolute top-0 left-0 flex flex-col gap-2 items-center justify-center w-full h-full ${map.done && "bg-black/70"}`}>
                                            {map.side !== "decider" ? (
                                                <img
                                                    src={map.team.team.logo}
                                                    alt={map.team.team.name}
                                                    className="size-8 object-scale-down"
                                                />
                                            ) : (
                                                <span className="font-semibold">Decisivo</span>
                                            )}
                                            <span className="font-semibold text-xl">{map.map.name}</span>
                                            {map.side !== "decider" && (
                                                <div className="flex items-center gap-2">
                                                    <img
                                                        src={currentMatch.teams.filter((t) => t.team.id !== map.team.team.id)[0].team.logo}
                                                        alt={map.team.team.name}
                                                        className="size-8 object-scale-down"
                                                    />
                                                    <span className="font-semibold">{map.side === "attacker" ? "Atacantes" : "Defensores"}</span>
                                                </div>
                                            )}
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
                    </div>
                )}
                {todayMatches.length === 0 ? (
                    <div className="p-8 flex flex-col items-center justify-center w-full">
                        <div className="flex-1 flex items-center justify-center rounded-md border border-dashed border-zinc-500 w-full py-10">
                            <span className="text-xl font-medium text-zinc-500">Nenhum jogo agendado para hoje</span>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col gap-2 p-8">
                        <span className="text-2xl font-semibold">Partidas do dia</span>
                        <div className="flex items-center gap-2">
                            {todayMatches.map((match) => (
                                <div className="rounded-md bg-zinc-600 w-fit flex flex-col items-center gap-2 overflow-hidden">
                                    <div className="bg-zinc-500 w-full px-4 py-1 flex items-center justify-center">
                                        <span className="font-medium text-sm">{match.date.toLocaleTimeString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" })}h</span>
                                    </div>
                                    <div className="flex items-center gap-4 p-4">
                                        <div className="flex items-center justify-center gap-8">
                                            <div className="flex flex-col gap-1 items-center justify-center">
                                                <img src={match.teams[0].team.logo} alt={match.teams[0].team.name} className="w-12 h-12 object-scale-down" title={match.teams[0].team.name} />
                                                <span className="font-semibold text-lg">{match.teams[0].team.symbol}</span>
                                            </div>
                                            <span className="text-xl font-bold">{match.teams[0].score}</span>
                                        </div>
                                        <span className="text-lg">x</span>
                                        <div className="flex items-center justify-center gap-8">
                                            <span className="text-xl font-bold">{match.teams[1].score}</span>
                                            <div className="flex flex-col gap-1 items-center justify-center">
                                                <img src={match.teams[1].team.logo} alt={match.teams[1].team.name} className="w-12 h-12 object-scale-down" title={match.teams[1].team.name} />
                                                <span className="font-semibold text-lg">{match.teams[1].team.symbol}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
