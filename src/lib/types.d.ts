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
    vlr?: string;
    players: Player[];
}

type Map = {
    id: string;
    name: string;
    image: string;
}

type MatchTeam = {
    team: Team;
    score: number;
}

type MatchMap = {
    id: string;
    map: Map;
    team: MatchTeam;
    side: "attacker" | "defender";
}

type Match = {
    id: string;
    teams: MatchTeam[];
    maps: MatchMap[];
    date: Date;
}

export { Team, Match, MatchTeam };
