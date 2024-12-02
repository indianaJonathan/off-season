import { Match } from "../types";
import { maps } from "./maps";
import { teams } from "./teams";

const loud = teams.find((team) => team.name === "LOUD");
const furia = teams.find((team) => team.name === "Furia");
const kru = teams.find((team) => team.name === "KRU");
const twoG = teams.find((team) => team.name === "2Game");
const mibr = teams.find((team) => team.name === "MIBR");
const shinden = teams.find((team) => team.name === "ShindeN");
const vcbChampion = teams.find((team) => team.name === "Campeão do VCB");
const vcbViceChampion = teams.find((team) => team.name === "Vice campeão do VCB");

const matches: Match[] = [
    {
        id: "1",
        teams: [
            {
                team: kru!,
                score: 0,
            },
            {
                team: shinden!,
                score: 0,
            }
        ],
        maps: [
            {
                id: '1',
                map: maps.find((map) => map.id === '1')!,
                team: {team: kru!, score: 0},
                side: 'attacker',
            },
            {
                id: '2',
                map: maps.find((map) => map.id === '2')!,
                team: {team: shinden!, score: 0},
                side: 'defender',
            },
            {
                id: '3',
                map: maps.find((map) => map.id === '3')!,
                team: {team: kru!, score: 0},
                side: 'defender',
            }
        ],
        date: new Date("2024-11-09T20:00:00.000Z"),
    },
    {
        id: "2",
        teams: [
            {
                team: furia!,
                score: 0,
            },
            {
                team: vcbChampion!,
                score: 0,
            }
        ],
        maps: [
            {
                id: '4',
                map: maps.find((map) => map.id === '4')!,
                team: {team: furia!, score: 0},
                side: 'attacker',
            },
            {
                id: '5',
                map: maps.find((map) => map.id === '5')!,
                team: {team: vcbChampion!, score: 0},
                side: 'defender',
            },
            {
                id: '6',
                map: maps.find((map) => map.id === '6')!,
                team: {team: furia!, score: 0},
                side: 'defender',
            }
        ],
        date: new Date("2024-11-09T23:00:00.000Z"),
    },
    {
        id: "3",
        teams: [
            {
                team: kru!,
                score: 0,
            },
            {
                team: vcbChampion!,
                score: 0,
            }
        ],
        maps: [
            {
                id: '7',
                map: maps.find((map) => map.id === '1')!,
                team: {team: kru!, score: 0},
                side: 'attacker',
            },
            {
                id: '8',
                map: maps.find((map) => map.id === '2')!,
                team: {team: vcbChampion!, score: 0},
                side: 'defender',
            },
            {
                id: '9',
                map: maps.find((map) => map.id === '3')!,
                team: {team: kru!, score: 0},
                side: 'defender',
            }
        ],
        date: new Date("2024-11-10T20:00:00.000Z"),
    },
    {
        id: "4",
        teams: [
            {
                team: furia!,
                score: 0,
            },
            {
                team: shinden!,
                score: 0,
            }
        ],
        maps: [
            {
                id: '10',
                map: maps.find((map) => map.id === '1')!,
                team: {team: shinden!, score: 0},
                side: 'attacker',
            },
            {
                id: '11',
                map: maps.find((map) => map.id === '2')!,
                team: {team: furia!, score: 0},
                side: 'defender',
            },
            {
                id: '12',
                map: maps.find((map) => map.id === '3')!,
                team: {team: shinden!, score: 0},
                side: 'defender',
            }
        ],
        date: new Date("2024-11-10T23:00:00.000Z"),
    },
    {
        id: "5",
        teams: [
            {
                team: kru!,
                score: 0,
            },
            {
                team: furia!,
                score: 0,
            }
        ],
        maps: [
            {
                id: '13',
                map: maps.find((map) => map.id === '1')!,
                team: {team: kru!, score: 0},
                side: 'attacker',
            },
            {
                id: '14',
                map: maps.find((map) => map.id === '2')!,
                team: {team: furia!, score: 0},
                side: 'defender',
            },
            {
                id: '15',
                map: maps.find((map) => map.id === '3')!,
                team: {team: kru!, score: 0},
                side: 'defender',
            }
        ],
        date: new Date("2024-11-11T20:00:00.000Z"),
    },
    {
        id: "7",
        teams: [
            {
                team: mibr!,
                score: 0,
            },
            {
                team: twoG!,
                score: 0,
            }
        ],
        maps: [
            {
                id: '19',
                map: maps.find((map) => map.id === '1')!,
                team: {team: mibr!, score: 0},
                side: 'attacker',
            },
            {
                id: '20',
                map: maps.find((map) => map.id === '2')!,
                team: {team: twoG!, score: 0},
                side: 'defender',
            },
            {
                id: '21',
                map: maps.find((map) => map.id === '3')!,
                team: {team: mibr!, score: 0},
                side: 'defender',
            }
        ],
        date: new Date("2024-11-12T20:00:00.000Z"),
    },
    {
        id: '8',
        teams: [
            {
                team: loud!,
                score: 0,
            },
            {
                team: vcbViceChampion!,
                score: 0,
            }
        ],
        maps: [
            {
                id: '22',
                map: maps.find((map) => map.id === '1')!,
                team: {team: loud!, score: 0},
                side: 'attacker',
            },
            {
                id: '23',
                map: maps.find((map) => map.id === '2')!,
                team: {team: vcbViceChampion!, score: 0},
                side: 'defender',
            },
            {
                id: '24',
                map: maps.find((map) => map.id === '3')!,
                team: {team: loud!, score: 0},
                side: 'defender',
            }
        ],
        date: new Date("2024-11-12T23:00:00.000Z"),
    },
    {
        id: '9',
        teams: [
            {
                team: loud!,
                score: 0,
            },
            {
                team: twoG!,
                score: 0,
            }
        ],
        maps: [
            {
                id: '25',
                map: maps.find((map) => map.id === '1')!,
                team: {team: loud!, score: 0},
                side: 'attacker',
            },
            {
                id: '26',
                map: maps.find((map) => map.id === '2')!,
                team: {team: twoG!, score: 0},
                side: 'defender',
            },
            {
                id: '27',
                map: maps.find((map) => map.id === '3')!,
                team: {team: loud!, score: 0},
                side: 'defender',
            }
        ],
        date: new Date("2024-11-13T20:00:00.000Z"),
    },
    {
        id: '10',
        teams: [
            {
                team: mibr!,
                score: 0,
            },
            {
                team: vcbViceChampion!,
                score: 0,
            }
        ],
        maps: [
            {
                id: '28',
                map: maps.find((map) => map.id === '1')!,
                team: {team: mibr!, score: 0},
                side: 'attacker',
            },
            {
                id: '29',
                map: maps.find((map) => map.id === '2')!,
                team: {team: vcbViceChampion!, score: 0},
                side: 'defender',
            },
            {
                id: '30',
                map: maps.find((map) => map.id === '3')!,
                team: {team: mibr!, score: 0},
                side: 'defender',
            }
        ],
        date: new Date("2024-11-13T23:00:00.000Z"),
    },
    {
        id: '11',
        teams: [
            {
                team: loud!,
                score: 0,
            },
            {
                team: mibr!,
                score: 0,
            }
        ],
        maps: [
            {
                id: '31',
                map: maps.find((map) => map.id === '1')!,
                team: {team: loud!, score: 0},
                side: 'attacker',
            },
            {
                id: '32',
                map: maps.find((map) => map.id === '2')!,
                team: {team: mibr!, score: 0},
                side: 'defender',
            },
            {
                id: '33',
                map: maps.find((map) => map.id === '3')!,
                team: {team: loud!, score: 0},
                side: 'defender',
            }
        ],
        date: new Date("2024-11-14T20:00:00.000Z"),
    },
    {
        id: '12',
        teams: [
            {
                team: twoG!,
                score: 0,
            },
            {
                team: vcbViceChampion!,
                score: 0,
            }
        ],
        maps: [
            {
                id: '34',
                map: maps.find((map) => map.id === '1')!,
                team: {team: vcbViceChampion!, score: 0},
                side: 'attacker',
            },
            {
                id: '35',
                map: maps.find((map) => map.id === '2')!,
                team: {team: twoG!, score: 0},
                side: 'defender',
            },
            {
                id: '36',
                map: maps.find((map) => map.id === '3')!,
                team: {team: vcbViceChampion!, score: 0},
                side: 'defender',
            }
        ],
        date: new Date("2024-11-14T23:00:00.000Z"),
    },
    {
        id: '13',
        teams: [
            {
                team: {
                    name: 'À definir',
                    id: '0',
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcnAg9QM_CEWzIJJHAONlEyPR9OQB2fRa_0A&s',
                    symbol: 'TBD',
                    vlr: 'https://www.vlr.gg/event/2278/tixinha-invitational-by-bonoxs',
                    players: [],
                },
                score: 0,
            },
            {
                team: {
                    name: 'À definir',
                    id: '0',
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcnAg9QM_CEWzIJJHAONlEyPR9OQB2fRa_0A&s',
                    symbol: 'TBD',
                    vlr: 'https://www.vlr.gg/event/2278/tixinha-invitational-by-bonoxs',
                    players: [],
                },
                score: 0,
            }
        ],
        maps: [],
        date: new Date("2024-11-15T20:00:00.000Z"),
    },
    {
        id: '14',
        teams: [
            {
                team: {
                    name: 'À definir',
                    id: '0',
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcnAg9QM_CEWzIJJHAONlEyPR9OQB2fRa_0A&s',
                    symbol: 'TBD',
                    vlr: 'https://www.vlr.gg/event/2278/tixinha-invitational-by-bonoxs',
                    players: [],
                },
                score: 0,
            },
            {
                team: {
                    name: 'À definir',
                    id: '0',
                    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcnAg9QM_CEWzIJJHAONlEyPR9OQB2fRa_0A&s',
                    symbol: 'TBD',
                    vlr: 'https://www.vlr.gg/event/2278/tixinha-invitational-by-bonoxs',
                    players: [],
                },
                score: 0,
            }
        ],
        maps: [],
        date: new Date("2024-11-15T23:00:00.000Z"),
    }
]

export { matches }
