export function Broadcast () {
    return (
        <div className="flex flex-col divide-y-2 divide-zinc-500">
            <iframe
                src={`https://player.twitch.tv/?channel=tixinhadois&parent=${import.meta.env.VITE_APP_TWITCH_PARENT}`}
                height="500px"
                width="100%"
                allowFullScreen={true}
            >
            </iframe>
            <div className="p-4">
                <h1 className="text-2xl font-semibold">LOUD vs Furia - OFF//SEASON - Dia 1</h1>
                <div className="flex flex-wrap gap-4 items-center">
                    <div className="flex gap-4 items-center justify-center overflow-hidden w-52 h-64 relative rounded-lg">
                        <img
                            src="https://s2-ge.glbimg.com/iGfFJE3OGnDbnLGPs-VOfGeIZig=/0x0:930x522/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/g/8/9EWYsQQgWYrFpGZEsggQ/bind.png"
                            className="w-full h-full object-cover opacity-30"
                        />
                        <div className="absolute top-0 left-0 flex flex-col gap-2 items-center justify-center w-full h-full">
                            <span className="font-semibold text-xl">BIND</span>
                            <div className="flex items-center gap-2">
                                <span className="font-light">Pick:</span>
                                <span className="font-semibold">LOUD</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-light">Def.:</span>
                                <span className="font-semibold">Furia</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center overflow-hidden w-52 h-64 relative rounded-lg">
                        <img
                            src="https://static1-br.millenium.gg/articles/9/40/79/@/84805-ascent-amp_main_media_schema-1.png"
                            className="w-full h-full object-cover opacity-30"
                        />
                        <div className="absolute top-0 left-0 flex flex-col gap-2 items-center justify-center w-full h-full">
                            <span className="font-semibold text-xl">ASCENT</span>
                            <div className="flex items-center gap-2">
                                <span className="font-light">Pick:</span>
                                <span className="font-semibold">Furia</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-light">Def.:</span>
                                <span className="font-semibold">Furia</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center overflow-hidden w-52 h-64 relative rounded-lg">
                        <img
                            src="https://www.pichauarena.com.br/wp-content/uploads/2024/03/sunset.png"
                            className="w-full h-full object-cover opacity-30"
                        />
                        <div className="absolute top-0 left-0 flex flex-col gap-2 items-center justify-center w-full h-full">
                            <span className="font-semibold text-xl">SUNSET</span>
                            <div className="flex items-center gap-2">
                                <span className="font-light">Pick:</span>
                                <span className="font-semibold">LOUD</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-light">Def.:</span>
                                <span className="font-semibold">LOUD</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
