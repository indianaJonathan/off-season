import { teams } from "./teams";

const kru = teams.find((team) => team.name === "KRU");
const furia = teams.find((team) => team.name === "Furia");
const galorys = teams.find((team) => team.name === "Galorys");
const shinden = teams.find((team) => team.name === "ShindeN");
const loud = teams.find((team) => team.name === "LOUD");
const mibr = teams.find((team) => team.name === "MIBR");
const twoG = teams.find((team) => team.name === "2Game");
const the7 = teams.find((team) => team.name === "The 7");

export const groups = [
    {
        id: '1',
        name: "Grupo A",
        teams: [
            {
                ...kru!,
                score: '12',
                place: 2,
            },
            {
                ...furia!,
                score: '18',
                place: 1,
            },
            {
                ...galorys!,
                score: '-7',
                place: 3,
            },
            {
                ...shinden!,
                score: '-23',
                place: 4,
            }
        ]
    },
    {
        id: '2',
        name: "Grupo B",
        teams: [
            {
                ...loud!,
                score: '-8',
                place: 3,
            },
            {
                ...mibr!,
                score: '25',
                place: 1,
            },
            {
                ...twoG!,
                score: '20',
                place: 2,
            },
            {
                ...the7!,
                score: '-37',
                place: 4,
            }
        ]
    }
]
