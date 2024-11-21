import { Bracket, IRoundProps } from 'react-brackets';
import { CustomSeed } from './components/custom-seed';

export function Scoreboard () {
    const rounds: IRoundProps[] = [
        {
            title: '',
            seeds: [
                {
                    id: 1,
                    date: new Date().toLocaleDateString(),
                    teams: [
                        {
                            name: 'LOUD',
                            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/LOUD_logo.svg/1200px-LOUD_logo.svg.png',
                            score: '0',
                        },
                        {
                            name: 'Furia',
                            logo: 'https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png',
                            score: '2',
                        }
                    ],
                },
                {
                    id: 2,
                    date: new Date().toLocaleDateString(),
                    teams: [
                        {
                            name: 'Furia',
                            logo: 'https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png',
                            score: '1',
                        },
                        {
                            name: 'LOUD',
                            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/LOUD_logo.svg/1200px-LOUD_logo.svg.png',
                            score: '2',
                        }
                    ],
                },
            ],
        },
        {
            title: '',
            seeds: [
                {
                    id: 3,
                    date: new Date().toLocaleDateString(),
                    teams: [
                        {
                            name: 'LOUD',
                            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/LOUD_logo.svg/1200px-LOUD_logo.svg.png',
                            score: '-',
                        },
                        {
                            name: 'Furia',
                            logo: 'https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png',
                            score: '-',
                        }
                    ],
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
