import { Link } from "react-router-dom";
import { teams } from "./lib/data";

export function App() {
  return (
    <div className='p-8 flex flex-col gap-2'>
      <h1 className="font-semibold text-3xl">Times</h1>
      <div className="grid grid-cols-3 gap-4">
        {teams.map((team) => (
          <Link
            to={`/teams/${team.id}`}
            key={team.name}
            className="flex flex-col items-center justify-center gap-2 rounded-lg border border-zinc-500 p-4 select-none hover:bg-zinc-500 transition-colors"
          >
            <img
              src={team.logo}
              alt={team.name}
              className="w-16 h-16 object-scale-down"
            />
            <div className="flex flex-col items-center justify-center">
              <span className="font-semibold text-lg">{team.name}</span>
              <span className="font-light text-sm">{team.symbol}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
