export function App() {
  return (
    <div className='p-8'>
      <h1 className="font-semibold text-3xl">Times</h1>
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col items-center justify-center rounded-lg border border-zinc-500 p-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/LOUD_logo.svg/1200px-LOUD_logo.svg.png" alt="LOUD" className="w-16 h-16" />
          <span className="font-semibold text-lg">LOUD</span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg border border-zinc-500 p-4">
          <img src="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png" alt="Furia" className="w-16 h-16" />
          <span className="font-semibold text-lg">Furia</span>
        </div>
      </div>
    </div>
  )
}
