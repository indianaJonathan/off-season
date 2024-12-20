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
                        score: 13,
                    },
                    {
                        team: furia!,
                        score: 7,
                    }
                ],
                done: true,
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
                score: 1,
            },
            {
                team: furia!,
                score: 2,
            }
        ],
        maps: [
            {
                id: '13',
                map: maps.find((map) => map.name === 'Abyss')!,
                team: {team: furia!, score: 0},
                side: 'attacker',
                score: [
                    {
                        team: furia!,
                        score: 13,
                    },
                    {
                        team: kru!,
                        score: 10,
                    }
                ],
                done: true,
            },
            {
                id: '14',
                map: maps.find((map) => map.name === 'Split')!,
                team: {team: kru!, score: 0},
                side: 'defender',
                score: [
                    {
                        team: furia!,
                        score: 7,
                    },
                    {
                        team: kru!,
                        score: 13,
                    }
                ],
                done: true,
            },
            {
                id: '15',
                map: maps.find((map) => map.name === 'Bind')!,
                team: {team: furia!, score: 0},
                side: 'decider',
                score: [
                    {
                        team: furia!,
                        score: 13,
                    },
                    {
                        team: kru!,
                        score: 4,
                    }
                ],
                done: true,
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
                score: 2,
            },
            {
                team: shinden!,
                score: 1,
            }
        ],
        maps: [
            {
                id: '16',
                map: maps.find((map) => map.name === 'Pearl')!,
                team: {team: shinden!, score: 0},
                side: 'attacker',
                score: [
                    {
                        team: shinden!,
                        score: 2,
                    },
                    {
                        team: galorys!,
                        score: 13,
                    }
                ],
                done: true,
            },
            {
                id: '17',
                map: maps.find((map) => map.name === 'Abyss')!,
                team: {team: galorys!, score: 0},
                side: 'defender',
                score: [
                    {
                        team: shinden!,
                        score: 13,
                    },
                    {
                        team: galorys!,
                        score: 8,
                    }
                ],
                done: true,
            },
            {
                id: '18',
                map: maps.find((map) => map.name === 'Split')!,
                team: {team: shinden!, score: 0},
                side: 'decider',
                score: [
                    {
                        team: shinden!,
                        score: 9,
                    },
                    {
                        team: galorys!,
                        score: 13,
                    }
                ],
                done: true,
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
                score: 1,
            },
            {
                team: twoG!,
                score: 1,
            }
        ],
        maps: [
            {
                id: '19',
                map: maps.find((map) => map.name === 'Split')!,
                team: {team: twoG!, score: 0},
                side: 'defender',
                score: [
                    {
                        team: mibr!,
                        score: 6,
                    },
                    {
                        team: twoG!,
                        score: 13,
                    }
                ],
                done: true,
            },
            {
                id: '20',
                map: maps.find((map) => map.name === 'Pearl')!,
                team: {team: mibr!, score: 0},
                side: 'attacker',
                score: [
                    {
                        team: mibr!,
                        score: 13,
                    },
                    {
                        team: twoG!,
                        score: 11,
                    }
                ],
                done: true,
            },
            {
                id: '21',
                map: maps.find((map) => map.name === 'Abyss')!,
                team: {team: twoG!, score: 0},
                side: 'decider',
                score: [
                    {
                        team: mibr!,
                        score: 13,
                    },
                    {
                        team: twoG!,
                        score: 9,
                    }
                ],
                done: true,
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
                score: 2,
            },
            {
                team: the7!,
                score: 0,
            }
        ],
        maps: [
            {
                id: '22',
                map: maps.find((map) => map.name === 'Haven')!,
                team: {team: loud!, score: 0},
                side: 'defender',
                score: [
                    {
                        team: loud!,
                        score: 13,
                    },
                    {
                        team: the7!,
                        score: 9,
                    }
                ],
                done: true,
            },
            {
                id: '23',
                map: maps.find((map) => map.name === 'Sunset')!,
                team: {team: the7!, score: 0},
                side: 'attacker',
                score: [
                    {
                        team: loud!,
                        score: 13,
                    },
                    {
                        team: the7!,
                        score: 4,
                    }
                ],
                done: true,
            },
            {
                id: '24',
                map: maps.find((map) => map.name === 'Pearl')!,
                team: {team: loud!, score: 0},
                side: 'decider',
                done: true,
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
                score: 1,
            },
            {
                team: twoG!,
                score: 2,
            }
        ],
        maps: [
            {
                id: '25',
                map: maps.find((map) => map.name === 'Abyss')!,
                team: {team: twoG!, score: 0},
                side: 'defender',
                score: [
                    {
                        team: loud!,
                        score: 6,
                    },
                    {
                        team: twoG!,
                        score: 13,
                    }
                ],
                done: true
            },
            {
                id: '26',
                map: maps.find((map) => map.name === 'Haven')!,
                team: {team: loud!, score: 0},
                side: 'attacker',
                score: [
                    {
                        team: loud!,
                        score: 13,
                    },
                    {
                        team: twoG!,
                        score: 7,
                    }
                ],
                done: true,
            },
            {
                id: '27',
                map: maps.find((map) => map.name === 'Ascent')!,
                team: {team: twoG!, score: 0},
                side: 'decider',
                score: [
                    {
                        team: loud!,
                        score: 4,
                    },
                    {
                        team: twoG!,
                        score: 13,
                    }
                ],
                done: true,
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
                map: maps.find((map) => map.name === 'Abyss')!,
                team: {team: the7!, score: 0},
                side: 'attacker',
                score: [
                    {
                        team: mibr!,
                        score: 13,
                    },
                    {
                        team: the7!,
                        score: 4,
                    },
                ],
                done: true,
            },
            {
                id: '29',
                map: maps.find((map) => map.name === 'Sunset')!,
                team: {team: mibr!, score: 0},
                side: 'attacker',
                score: [
                    {
                        team: mibr!,
                        score: 13,
                    },
                    {
                        team: the7!,
                        score: 7,
                    },
                ],
                done: true,
            },
            {
                id: '30',
                map: maps.find((map) => map.name === 'Pearl')!,
                team: {team: the7!, score: 0},
                side: 'decider',
                done: true,
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
                score: 2,
            }
        ],
        maps: [
            {
                id: '31',
                map: maps.find((map) => map.name === 'Bind')!,
                team: {team: mibr!, score: 0},
                side: 'defender',
                score: [
                    {
                        team: loud!,
                        score: 9,
                    },
                    {
                        team: mibr!,
                        score: 13,
                    }
                ],
                done: true,
            },
            {
                id: '32',
                map: maps.find((map) => map.name === 'Haven')!,
                team: {team: loud!, score: 0},
                side: 'attacker',
                score: [
                    {
                        team: loud!,
                        score: 6,
                    },
                    {
                        team: mibr!,
                        score: 13,
                    }
                ],
                done: true,
            },
            {
                id: '33',
                map: maps.find((map) => map.name === 'Sunset')!,
                team: {team: mibr!, score: 0},
                side: 'decider',
                done: true,
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
                score: 2,
            },
            {
                team: the7!,
                score: 0,
            }
        ],
        maps: [
            {
                id: '34',
                map: maps.find((map) => map.name === 'Haven')!,
                team: {team: the7!, score: 0},
                side: 'attacker',
                score: [
                    {
                        team: twoG!,
                        score: 13,
                    },
                    {
                        team: the7!,
                        score: 6,
                    }
                ],
                done: true,
            },
            {
                id: '35',
                map: maps.find((map) => map.name === 'Abyss')!,
                team: {team: twoG!, score: 0},
                side: 'attacker',
                score: [
                    {
                        team: twoG!,
                        score: 13,
                    },
                    {
                        team: the7!,
                        score: 6,
                    }
                ],
                done: true,
            },
            {
                id: '36',
                map: maps.find((map) => map.name === 'Bind')!,
                team: {team: the7!, score: 0},
                side: 'decider',
                done: true,
            }
        ],
        vlr: "https://www.vlr.gg/425937/2game-esports-vs-the-7-tixinha-invitational-by-bonoxs-groups-r3",
        date: new Date("2024-12-14T23:00:00.000Z"),
    },
    {
        id: '13',
        teams: [
            {
                team: kru!,
                score: 2,
            },
            {
                team: twoG!,
                score: 0,
            }
        ],
        maps: [
            {
                id: '37',
                map: maps.find((map) => map.name === 'Abyss')!,
                team: {team: twoG!, score: 0},
                side: 'attacker',
                score: [
                    {
                        team: kru!,
                        score: 13,
                    },
                    {
                        team: twoG!,
                        score: 5,
                    }
                ],
                done: true,
            },
            {
                id: '38',
                map: maps.find((map) => map.name === "Bind")!,
                team: {team: kru!, score: 0},
                side: 'attacker',
                score: [
                    {
                        team: kru!,
                        score: 13,
                    },
                    {
                        team: twoG!,
                        score: 8,
                    }
                ],
                done: true,
            },
            {
                id: '39',
                map: maps.find((map) => map.name === "Split")!,
                team: {team: kru!, score: 0},
                side: 'decider',
                done: true,
            }
        ],
        vlr: "https://www.vlr.gg/430098/kr-esports-vs-2game-esports-tixinha-invitational-by-bonoxs-cf",
        date: new Date("2024-12-15T20:00:00.000Z"),
    },
    {
        id: '14',
        teams: [
            {
                team: furia!,
                score: 2,
            },
            {
                team: mibr!,
                score: 1,
            }
        ],
        maps: [
            {
                id: '40',
                map: maps.find((map) => map.name === "Bind")!,
                team: {team: mibr!, score: 0},
                side: 'defender',
                score: [
                    {
                        team: furia!,
                        score: 13,
                    },
                    {
                        team: mibr!,
                        score: 9,
                    }
                ],
                done: true,
            },
            {
                id: '41',
                map: maps.find((map) => map.name === "Abyss")!,
                team: {team: furia!, score: 0},
                side: 'defender',
                score: [
                    {
                        team: furia!,
                        score: 15,
                    },
                    {
                        team: mibr!,
                        score: 17,
                    }
                ],
                done: true,
            },
            {
                id: '42',
                map: maps.find((map) => map.name === "Haven")!,
                team: {team: mibr!, score: 0},
                side: 'decider',
                score: [
                    {
                        team: furia!,
                        score: 13,
                    },
                    {
                        team: mibr!,
                        score: 8,
                    }
                ],
                done: true,
            }
        ],
        vlr: "https://www.vlr.gg/430099/furia-vs-mibr-tixinha-invitational-by-bonoxs-gf",
        date: new Date("2024-12-15T23:00:00.000Z"),
    }
]

export { matches }
