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
            },
            {
                ...furia!,
                score: '18',
            },
            {
                ...galorys!,
                score: '-7',
            },
            {
                ...shinden!,
                score: '-23',
            }
        ]
    },
    {
        id: '2',
        name: "Grupo B",
        teams: [
            {
                ...loud!,
                score: '13',
            },
            {
                ...mibr!,
                score: '-1',
            },
            {
                ...twoG!,
                score: '1',
            },
            {
                ...the7!,
                score: '-13',
            }
        ]
    }
]
