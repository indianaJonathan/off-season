import { groups } from '../../lib/data';
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
                            {group.teams.sort((a, b) => a.score > b.score ? -1 : 1).map((team) => (
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
                    <div className='flex items-center gap-2 p-2'>
                        <div className='flex items-center gap-2'>
                            <img
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcnAg9QM_CEWzIJJHAONlEyPR9OQB2fRa_0A&s'
                                alt='Terceiro lugar'
                                className='w-8 h-8 object-scale-down'
                            />
                            <span>TBD</span>
                        </div>
                        <span>X</span>
                        <div className='flex items-center gap-2'>
                            <span>TBD</span>
                            <img
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcnAg9QM_CEWzIJJHAONlEyPR9OQB2fRa_0A&s'
                                alt='Terceiro lugar'
                                className='w-8 h-8 object-scale-down'
                            />
                        </div>
                    </div>
                    <div className='flex items-center justify-center bg-zinc-500 p-2 w-full h-full'>
                        <span className='font-light text-sm'>15/11/2024 17:00h</span>
                    </div>
                </div>
                <div className='flex-1 flex flex-col items-center gap-2 rounded-sm border border-zinc-500'>
                    <div className='w-full h-full p-2 bg-zinc-500 flex items-center justify-center'>
                        <span className='font-semibold text-xl'>Grande final</span>
                    </div>
                    <div className='flex items-center gap-2 p-2'>
                        <div className='flex items-center gap-2'>
                            <img
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcnAg9QM_CEWzIJJHAONlEyPR9OQB2fRa_0A&s'
                                alt='Grande final'
                                className='w-8 h-8 object-scale-down'
                            />
                            <span>TBD</span>
                        </div>
                        <span>X</span>
                        <div className='flex items-center gap-2'>
                            <span>TBD</span>
                            <img
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcnAg9QM_CEWzIJJHAONlEyPR9OQB2fRa_0A&s'
                                alt='Grande final'
                                className='w-8 h-8 object-scale-down'
                            />
                        </div>
                    </div>
                    <div className='flex items-center justify-center bg-zinc-500 p-2 w-full h-full'>
                        <span className='font-light text-sm'>15/11/2024 21:00h</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
