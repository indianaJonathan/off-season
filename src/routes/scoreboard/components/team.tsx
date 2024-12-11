type TeamType = {
    id: string;
    name: string;
    logo: string;
    score: string;
}

export function Team ({ team }: { team: TeamType }) {
    return (
        <div className="flex items-center gap-2 border border-zinc-500 rounded">
            <div className="flex-1 flex items-center justify-start gap-4 p-4">
                <img src={team.logo} alt={team.name} className="w-8 h-8 object-scale-down" />
                <span>{team.name}</span>
            </div>
            <div className="px-3 py-2">
                <span
                    className={`font-semibold text-lg ${Number.parseInt(team.score) > 0 ? 'text-green-500' : (Number.parseInt(team.score) === 0 ? 'text-zinc-300' : 'text-red-500')}`}
                >
                    {team.score}
                </span>
            </div>
        </div>
    );
}
