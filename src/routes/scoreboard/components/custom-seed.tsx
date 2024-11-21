import { IRenderSeedProps, Seed, SeedItem, SeedTeam } from "react-brackets";

export const CustomSeed = ({seed, breakpoint}: IRenderSeedProps) => {
    return (
      <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 12 }}>
        <SeedItem>
          <div className="flex flex-col gap-2 bg-zinc-800">
            <SeedTeam className="flex gap-2 bg-zinc-700">
                <img src={seed.teams[0]?.logo} alt={seed.teams[0]?.name} className="w-8 h-8" />
                <span className="flex-1">{seed.teams[0]?.name || 'NO TEAM '}</span>
                <span>{seed.teams[0]?.score}</span>
            </SeedTeam>
            <SeedTeam className="flex gap-2 bg-zinc-700">
                <img src={seed.teams[1]?.logo} alt={seed.teams[1]?.name} className="w-8 h-8" />
                <span className="flex-1">{seed.teams[1]?.name || 'NO TEAM '}</span>
                <span>{seed.teams[1]?.score}</span>
            </SeedTeam>
          </div>
        </SeedItem>
      </Seed>
    );
  };
