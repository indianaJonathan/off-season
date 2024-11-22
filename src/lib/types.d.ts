type Player = {
    id: string;
    name: string;
    avatar?: string;
    role: "duelist" | "initiator" | "sentinel" | "controller" | "flex";
}

type Team = {
    id: string;
    name: string;
    symbol: string;
    logo: string;
    players: Player[];
}

type MatchTeam = {
    team: Team;
    score: number;
}

type Match = {
    id: string;
    teams: MatchTeam[];
    date: Date;
}

export { Team, Match };
