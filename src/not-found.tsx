import { Link } from "react-router-dom";

export function NotFound () {
    return (
        <div className="flex-1 p-8 flex flex-col items-center justify-center gap-4">
            <span className="font-semibold text-3xl">Página não encontrada</span>
            <p className="text-lg">Parece que o dardo de reconhecimento não encontrou nada por aqui.</p>
            <Link
                to={"/"}
                className="flex items-center gap-2 border border-zinc-500 px-4 py-2 rounded"
            >
                <span>Voltar para página inicial</span>
            </Link>
        </div>
    );
}
