import { useParams } from "react-router";
import { teams } from "../../lib/data";
import { NotFound } from "../../not-found";

export function Team () {
    const params = useParams();

    const { id } = params;

    const team = teams.find((team) => team.id === id);

    if (!team) return <NotFound />;

    return (
        <div className="p-8 flex flex-col gap-2">
            <h1 className="font-semibold text-3xl">{team.name}</h1>
            <div className="grid grid-cols-3 gap-2">
                {team.players.map((player) => (
                    <div
                        key={player.id}
                        className="flex flex-col items-center justify-center gap-2 rounded-lg border border-zinc-500 p-4 select-none hover:bg-zinc-500 transition-colors"
                    >
                        <img
                            src={player.avatar || "https://www.vlr.gg/img/base/ph/sil.png"}
                            alt={player.name}
                            className="w-16 h-16 object-scale-down"
                        />
                        <div className="flex flex-col items-center justify-center">
                            <span className="font-semibold text-lg">{player.name}</span>
                            <img
                                src={getRoleIcon(player.role)}
                                alt={player.role}
                                className={`w-8 h-8 object-scale-down ${player.role === "flex" ? "invert" : ""}`}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function getRoleIcon (role: string) {
    switch (role) {
        case "duelist":
            return "https://cdn3.emoji.gg/emojis/4987-duelist-valorant.png";
        case "initiator":
            return "https://konect.gg/assets/images/GameValorantRoleInitiator.png";
        case "sentinel":
            return "https://cdn3.emoji.gg/emojis/5030-sentinel-valorant.png";
        case "controller":
            return "https://cdn3.emoji.gg/emojis/8733-controller-valorant.png";
        case "flex":
            return "https://cdn0.iconfinder.com/data/icons/positive-and-neutral-character-traits-alphabet-v-w/277/positive-wxyz006-512.png";
        default:
            return "🗡️";
    }
}
