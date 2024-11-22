import { Bracket, IRoundProps } from 'react-brackets';
import { CustomSeed } from './components/custom-seed';
import { matches } from '../../lib/data';

export function Scoreboard () {
    const rounds: IRoundProps[] = [
        {
            title: '',
            seeds: [
                {
                    id: matches[0].id,
                    date: matches[0].date.toLocaleDateString(),
                    teams: matches[0].teams.map((t) => ({...t.team, score: t.score})),
                },
                {
                    id: matches[1].id,
                    date: matches[1].date.toLocaleDateString(),
                    teams: matches[1].teams.map((t) => ({...t.team, score: t.score})),
                },
            ],
        },
        {
            title: '',
            seeds: [
                {
                    id: matches[2].id,
                    date: matches[2].date.toLocaleDateString(),
                    teams: matches[2].teams.map((t) => ({...t.team, score: t.score})),
                },
            ]
        }
    ];

    return (
        <div className="flex-1 p-8 flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Tabela</h1>
            <Bracket
                rounds={rounds}
                renderSeedComponent={CustomSeed}
            />
        </div>
    );
}
