import { Match } from "./components/match";

export function Schedule () {
    return (
        <div className="flex-1 p-8 flex flex-col gap-2 ">
            <h1 className="text-2xl font-semibold">Cronograma</h1>
            <div className="flex flex-col gap-2">
                <Match
                    team1={{
                        id: "1",
                        name: "LOUD",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/LOUD_logo.svg/1200px-LOUD_logo.svg.png",
                    }}
                    team2={{
                        id: "1",
                        name: "Furia",
                        logo: "https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png",
                    }}
                    time="21/11/2024 10:00"
                />
            </div>
        </div>
    );
}
