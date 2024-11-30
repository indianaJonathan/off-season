import { teams } from "./teams";

const kru = teams.find((team) => team.name === "KRU");
const furia = teams.find((team) => team.name === "Furia");
const vcbChampion = teams.find((team) => team.name === "Campeão do VCB");
const shinden = teams.find((team) => team.name === "Shinden Esports");
const loud = teams.find((team) => team.name === "LOUD");
const mibr = teams.find((team) => team.name === "MIBR");
const twoG = teams.find((team) => team.name === "2Game");
const vcbViceChampion = teams.find((team) => team.name === "Vice campeão do VCB");

export const groups = [
    {
        id: '1',
        name: "Grupo A",
        teams: [
            {
                ...kru!,
                score: '0',
            },
            {
                ...furia!,
                score: '0',
            },
            {
                ...vcbChampion!,
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
                ...vcbViceChampion!,
                score: '0',
            }
        ]
    }
]
