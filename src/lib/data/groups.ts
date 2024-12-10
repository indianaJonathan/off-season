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
                score: '1',
            },
            {
                ...furia!,
                score: '1',
            },
            {
                ...galorys!,
                score: '0',
            },
            {
                ...shinden!,
                score: '0',
            }
        ]
    },
    {
        id: '2',
        name: "Grupo B",
        teams: [
            {
                ...loud!,
                score: '0',
            },
            {
                ...mibr!,
                score: '0',
            },
            {
                ...twoG!,
                score: '0',
            },
            {
                ...the7!,
                score: '0',
            }
        ]
    }
]
