import { Match } from "../types";
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
                team: furia!,
                score: 0,
            }
        ],
        date: new Date("2024-11-09T20:00:00.000Z"),
    },
    {
        id: "2",
        teams: [
            {
                team: vcbChampion!,
                score: 0,
            },
            {
                team: shinden!,
                score: 0,
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
        date: new Date("2024-11-10T23:00:00.000Z"),
    },
    {
        id: "5",
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
        date: new Date("2024-11-11T20:00:00.000Z"),
    },
    {
        id: "6",
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
        date: new Date("2024-11-11T23:00:00.000Z"),
    },
    {
        id: "7",
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
        date: new Date("2024-11-12T20:00:00.000Z"),
    },
    {
        id: '8',
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
                team: vcbViceChampion!,
                score: 0,
            }
        ],
        date: new Date("2024-11-13T20:00:00.000Z"),
    },
    {
        id: '10',
        teams: [
            {
                team: twoG!,
                score: 0,
            },
            {
                team: mibr!,
                score: 0,
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
        date: new Date("2024-11-14T23:00:00.000Z"),
    }
]

export { matches }
