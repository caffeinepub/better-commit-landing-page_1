export function Hero() {
    return (
        <main className="flex flex-1 items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
            <div className="w-full max-w-5xl text-center">
                <div className="relative">
                    {/* Gradient background effect */}
                    <div className="absolute inset-0 -z-10 flex items-center justify-center">
                        <div className="h-[400px] w-[400px] rounded-full bg-gradient-to-br from-white/10 via-white/5 to-white/10 blur-3xl sm:h-[600px] sm:w-[600px]" />
                    </div>

                    {/* Main heading */}
                    <h1 className="mb-6 bg-gradient-to-br from-white via-white to-white/90 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
                        Better Commit
                    </h1>

                    {/* Subtitle */}
                    <p className="mx-auto max-w-2xl text-lg text-white/90 sm:text-xl md:text-2xl">
                        Elevate your development workflow with smarter, cleaner commits
                    </p>

                    {/* Decorative line */}
                    <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-white/80 via-white to-white/80" />
                </div>
            </div>
        </main>
    );
}

