import { Match } from "../types";
import { maps } from "./maps";
import { teams } from "./teams";

const loud = teams.find((team) => team.name === "LOUD");
const furia = teams.find((team) => team.name === "Furia");
const kru = teams.find((team) => team.name === "KRU");
const twoG = teams.find((team) => team.name === "2Game");
const mibr = teams.find((team) => team.name === "MIBR");
const shinden = teams.find((team) => team.name === "ShindeN");
const galorys = teams.find((team) => team.name === "Galorys");
const the7 = teams.find((team) => team.name === "The 7");

const matches: Match[] = [
    {
        id: "1",
        teams: [
            {
                team: kru!,
                score: 2,
            },
            {
                team: shinden!,
                score: 0,
            }
        ],
        maps: [
            {
                id: '1',
                map: maps.find((map) => map.id === '4')!,
                team: {team: shinden!, score: 0},
                side: 'attacker',
                score: [
                    {
                        team: kru!,
                        score: 13
                    },
                    {
                        team: shinden!,
                        score: 11
                    },
                ],
                done: true,
            },
            {
                id: '2',
                map: maps.find((map) => map.id === '1')!,
                team: {team: kru!, score: 0},
                side: 'defender',
                score: [
                    {
                        team: kru!,
                        score: 15
                    },
                    {
                        team: shinden!,
                        score: 13
                    },
                ],
                done: true,
            },
            {
                id: '3',
                map: maps.find((map) => map.id === '5')!,
                team: {team: shinden!, score: 0},
                side: 'defender',
                done: true,
            }
        ],
        vlr: "https://www.vlr.gg/425926/kr-esports-vs-shinden-tixinha-invitational-by-bonoxs-r1",
        date: new Date("2024-12-09T20:00:00.000Z"),
    },
    {
        id: "2",
        teams: [
            {
                team: furia!,
                score: 2,
            },
            {
                team: galorys!,
                score: 1,
            }
        ],
        maps: [
            {
                id: '4',
                map: maps.find((map) => map.id === '4')!,
                team: {team: galorys!, score: 0},
                side: 'defender',
                score: [
                    {
                        team: furia!,
                        score: 5
                    },
                    {
                        team: galorys!,
                        score: 13
                    },
                ],
                done: true,
            },
            {
                id: '5',
                map: maps.find((map) => map.id === '6')!,
                team: {team: furia!, score: 1},
                side: 'defender',
                score: [
                    {
                        team: furia!,
                        score: 15
                    },
                    {
                        team: galorys!,
                        score: 13
                    },
                ],
                done: true,
            },
            {
                id: '6',
                map: maps.find((map) => map.id === '1')!,
                team: {team: galorys!, score: 0},
                side: 'defender',
                score: [
                    {
                        team: furia!,
                        score: 13
                    },
                    {
                        team: galorys!,
                        score: 4
                    },
                ],
                done: true,
            }
        ],
        vlr: "https://www.vlr.gg/425965/furia-vs-galorys-tixinha-invitational-by-bonoxs-r1",
        date: new Date("2024-12-09T23:00:00.000Z"),
    },
    {
        id: "3",
        teams: [
            {
                team: kru!,
                score: 2,
            },
            {
                team: galorys!,
                score: 0,
            }
        ],
        maps: [
            {
                id: '7',
                map: maps.find((map) => map.id === '2')!,
                team: {team: kru!, score: 1},
                side: 'defender',
                score: [
                    {
                        team: kru!,
                        score: 13
                    },
                    {
                        team: galorys!,
                        score: 9
                    }
                ],
                done: true,
            },
            {
                id: '8',
                map: maps.find((map) => map.id === '5')!,
                team: {team: galorys!, score: 0},
                side: 'defender',
                score: [
                    {
                        team: kru!,
                        score: 13,
                    },
                    {
                        team: galorys!,
                        score: 3,
                    }
                ],
                done: true,
            },
            {
                id: '9',
                map: maps.find((map) => map.id === '7')!,
                team: {team: kru!, score: 1},
                side: 'attacker',
                done: true,
            }
        ],
        vlr: "https://www.vlr.gg/425930/kr-esports-vs-galorys-tixinha-invitational-by-bonoxs-groups-r2",
        date: new Date("2024-12-10T20:00:00.000Z"),
    },
    {
        id: "4",
        teams: [
            {
                team: furia!,
                score: 1,
            },
            {
                team: shinden!,
                score: 1,
            }
        ],
        maps: [
            {
                id: '10',
                map: maps.find((map) => map.name === 'Abyss')!,
                team: {team: shinden!, score: 0},
                side: 'defender',
                score: [
                    {
                        team: shinden!,
                        score: 4,
                    },
                    {
                        team: furia!,
                        score: 13,
                    }
                ],
                done: true,
            },
            {
                id: '11',
                map: maps.find((map) => map.name === 'Ascent')!,
                team: {team: furia!, score: 0},
                side: 'defender',
                score: [
                    {
                        team: shinden!,
                        score: 13,
                    },
                    {
                        team: furia!,
                        score: 7,
                    }
                ],
                done: true,
            },
            {
                id: '12',
                map: maps.find((map) => map.name === 'Bind')!,
                team: {team: shinden!, score: 0},
                side: 'decider',
                score: [
                    {
                        team: shinden!,
                        score: 0,
                    },
                    {
                        team: furia!,
                        score: 0,
                    }
                ],
                done: false,
            }
        ],
        vlr: "https://www.vlr.gg/425931/furia-vs-shinden-tixinha-invitational-by-bonoxs-groups-r2",
        date: new Date("2024-12-10T22:00:00.000Z"),
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
        vlr: "https://www.vlr.gg/425934/kr-esports-vs-furia-tixinha-invitational-by-bonoxs-groups-r3",
        date: new Date("2024-12-11T20:00:00.000Z"),
    },
    {
        id: '6',
        teams: [
            {
                team: galorys!,
                score: 0,
            },
            {
                team: shinden!,
                score: 0,
            }
        ],
        maps: [
            {
                id: '16',
                map: maps.find((map) => map.id === '1')!,
                team: {team: galorys!, score: 0},
                side: 'attacker',
            },
            {
                id: '17',
                map: maps.find((map) => map.id === '2')!,
                team: {team: shinden!, score: 0},
                side: 'attacker',
            },
            {
                id: '18',
                map: maps.find((map) => map.id === '3')!,
                team: {team: galorys!, score: 0},
                side: 'attacker',
            }
        ],
        vlr: "https://www.vlr.gg/425935/galorys-vs-shinden-tixinha-invitational-by-bonoxs-groups-r3",
        date: new Date("2024-12-11T23:00:00.000Z"),
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
        vlr: "https://www.vlr.gg/425928/mibr-vs-2game-esports-tixinha-invitational-by-bonoxs-groups-r1",
        date: new Date("2024-12-12T20:00:00.000Z"),
    },
    {
        id: '8',
        teams: [
            {
                team: loud!,
                score: 0,
            },
            {
                team: the7!,
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
                team: {team: the7!, score: 0},
                side: 'defender',
            },
            {
                id: '24',
                map: maps.find((map) => map.id === '3')!,
                team: {team: loud!, score: 0},
                side: 'defender',
            }
        ],
        vlr: "https://www.vlr.gg/425966/loud-vs-the-7-tixinha-invitational-by-bonoxs-groups-r1",
        date: new Date("2024-12-12T23:00:00.000Z"),
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
        vlr: "https://www.vlr.gg/425932/loud-vs-2game-esports-tixinha-invitational-by-bonoxs-groups-r2",
        date: new Date("2024-12-13T20:00:00.000Z"),
    },
    {
        id: '10',
        teams: [
            {
                team: mibr!,
                score: 0,
            },
            {
                team: the7!,
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
                team: {team: the7!, score: 0},
                side: 'defender',
            },
            {
                id: '30',
                map: maps.find((map) => map.id === '3')!,
                team: {team: mibr!, score: 0},
                side: 'defender',
            }
        ],
        vlr: "https://www.vlr.gg/425933/mibr-vs-the-7-tixinha-invitational-by-bonoxs-groups-r2",
        date: new Date("2024-12-13T23:00:00.000Z"),
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
        vlr: "https://www.vlr.gg/425936/loud-vs-mibr-tixinha-invitational-by-bonoxs-groups-r3",
        date: new Date("2024-12-14T20:00:00.000Z"),
    },
    {
        id: '12',
        teams: [
            {
                team: twoG!,
                score: 0,
            },
            {
                team: the7!,
                score: 0,
            }
        ],
        maps: [
            {
                id: '34',
                map: maps.find((map) => map.id === '1')!,
                team: {team: the7!, score: 0},
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
                team: {team: the7!, score: 0},
                side: 'defender',
            }
        ],
        vlr: "https://www.vlr.gg/425937/2game-esports-vs-the-7-tixinha-invitational-by-bonoxs-groups-r3",
        date: new Date("2024-12-14T23:00:00.000Z"),
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
        date: new Date("2024-12-15T20:00:00.000Z"),
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
        date: new Date("2024-12-15T23:00:00.000Z"),
    }
]

export { matches }
