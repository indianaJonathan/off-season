import { groups, matches } from '../../lib/data';
import { Match } from './components/match';
import { Team } from './components/team';

export function Scoreboard () {
    return (
        <div className="flex-1 p-8 flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Tabela</h1>
            <div className='grid grid-cols-2 space-x-2 relative'>
                {groups.map((group) => (
                    <div
                        key={`group-${group.id}`}
                        className="flex flex-col gap-2"
                    >
                        <div className="flex items-center gap-2">
                            <span className="font-semibold text-lg">{group.name}</span>
                            <span className="font-light text-sm">({group.teams.length} times)</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            {group.teams.sort((a, b) => b.place > a.place ? -1 : 1).map((team) => (
                                <Team
                                    key={`team-${team.id}`}
                                    team={team}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex items-center gap-4 w-full mt-10'>
                <div className='flex-1 flex flex-col items-center gap-2 rounded-sm border border-zinc-500'>
                    <div className='w-full h-full p-2 bg-zinc-500 flex items-center justify-center'>
                        <span className='font-semibold text-xl'>Disputa de 3º lugar</span>
                    </div>
                    <div className='flex items-center gap-2 w-full'>
                        <Match
                            team1={matches[12].teams[0]}
                            team2={matches[12].teams[1]}
                            time={matches[12].date.toLocaleDateString() + " " + matches[12].date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
                        />
                    </div>
                </div>
                <div className='flex-1 flex flex-col items-center gap-2 rounded-sm border border-zinc-500'>
                    <div className='w-full h-full p-2 bg-zinc-500 flex items-center justify-center'>
                        <span className='font-semibold text-xl'>Grande final</span>
                    </div>
                    <div className='flex items-center gap-2 w-full'>
                        <Match
                            team1={matches[13].teams[0]}
                            team2={matches[13].teams[1]}
                            time={matches[13].date.toLocaleDateString() + " " + matches[13].date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
