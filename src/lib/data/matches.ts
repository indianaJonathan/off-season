import { Match } from "../types";
import { teams } from "./teams";

const loud = teams.find((team) => team.name === "LOUD");
const furia = teams.find((team) => team.name === "Furia");
const kru = teams.find((team) => team.name === "KRU");
const twoG = teams.find((team) => team.name === "2Game");

const matches: Match[] = [
    {
        id: "1",
        teams: [
            {
                team: loud!,
                score: 0,
            },
            {
                team: furia!,
                score: 2,
            }
        ],
        date: new Date("2024-11-21T10:00:00.000Z"),
    },
    {
        id: "2",
        teams: [
            {
                team: kru!,
                score: 2,
            },
            {
                team: twoG!,
                score: 1,
            }
        ],
        date: new Date("2024-11-21T13:00:00.000Z"),
    },
    {
        id: "3",
        teams: [
            {
                team: kru!,
                score: 2,
            },
            {
                team: furia!,
                score: 1,
            }
        ],
        date: new Date("2024-11-21T17:00:00.000Z"),
    }
]

export { matches }
