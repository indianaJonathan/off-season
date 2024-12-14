import { Link } from "react-router-dom";
import { teams } from "./lib/data";

export function App() {
  return (
    <div className='p-8 flex flex-col gap-8'>
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-3xl">Notícias</h1>
        <div className="flex items-center flex-wrap gap-4">
          <div className="flex flex-col gap-2 p-2 border border-zinc-500 rounded-md">
            <span className="font-semibold">Anúncio do campeonato</span>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/6V19l6aPPAU?si=rytMBDeJilcoMYIs"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            >

            </iframe>
          </div>
          <div className="flex flex-col gap-2 p-2 border border-zinc-500 rounded-md">
            <span className="font-semibold">Anúncio do formato</span>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/n2Y-K59ztls?si=ZKk7YUjrfeyqa8Vt"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            >
            </iframe>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-3xl">Times</h1>
        <div className="grid grid-cols-8 gap-4">
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
    </div>
  )
}
