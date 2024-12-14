import { useParams } from "react-router";
import { matches, teams } from "../../lib/data";
import { NotFound } from "../../not-found";
import { Link } from "react-router-dom";
import { Match } from "../schedule/components/match";

export function Team () {
    const params = useParams();

    const { id } = params;

    const team = teams.find((team) => team.id === id);

    if (!team) return <NotFound />;

    const teamMatches = matches.filter((m) => m.teams.map((t) => t.team.id).includes(team.id));

    return (
        <div className="p-8 flex flex-col gap-2">
            <div className="flex items-center gap-2 p-1">
                <h1 className="font-semibold text-3xl">{team.name}</h1>
                {team.vlr && (
                    <Link
                        to={team.vlr}
                        target="_blank"
                        className="flex items-center gap-2 rounded-lg bg-zinc-500 p-1 select-none hover:bg-zinc-600 transition-colors"
                    >
                        <img src="https://www.vlr.gg/img/vlr/logo_header.png" alt="VLR logo" className="size-4 object-scale-down" />
                        <span className="font-light text-sm">VLR</span>
                    </Link>
                )}
            </div>
            <div className="grid grid-cols-4 gap-2">
                {team.players.map((player) => (
                    <div
                        key={player.id}
                        className="flex items-center justify-between gap-2 rounded-lg border border-zinc-500 p-4 select-none hover:bg-zinc-500 transition-colors"
                    >
                        <div className="flex-1 flex items-center justify-center">
                            <img
                                src={player.avatar || "https://www.vlr.gg/img/base/ph/sil.png"}
                                alt={player.name}
                                className="w-16 h-16 object-scale-down"
                            />
                            <div className="flex-1 flex items-start h-full">
                                <span className="font-semibold text-lg">{player.name}</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <img
                                src={`/assets/${player.role}.png`}
                                alt={player.role}
                                className={`w-8 h-8 object-scale-down`}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <h1 className="font-semibold text-3xl">Jogos</h1>
            </div>
            <div className="grid grid-cols-5 gap-2">
                {teamMatches.map((m) => (
                    <Match
                        key={m.id}
                        team1={m.teams[0]}
                        team2={m.teams[1]}
                        time={m.date.toLocaleDateString() + " " + m.date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
                        match={m}
                    />
                ))}
            </div>
        </div>
    );
}

// function getRoleIcon (role: string) {
//     switch (role) {
//         case "duelist":
//             return "https://cdn3.emoji.gg/emojis/4987-duelist-valorant.png";
//         case "initiator":
//             return "https://konect.gg/assets/images/GameValorantRoleInitiator.png";
//         case "sentinel":
//             return "https://cdn3.emoji.gg/emojis/5030-sentinel-valorant.png";
//         case "controller":
//             return "https://cdn3.emoji.gg/emojis/8733-controller-valorant.png";
//         case "flex":
//             return "https://cdn0.iconfinder.com/data/icons/positive-and-neutral-character-traits-alphabet-v-w/277/positive-wxyz006-512.png";
//         default:
//             return "🗡️";
//     }
// }
