export function Header() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/20 bg-background/90 backdrop-blur-md">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/90">
                        <span className="text-sm font-bold text-red-600">BC</span>
                    </div>
                    <span className="text-lg font-semibold tracking-tight text-white">Better Commit</span>
                </div>
            </div>
        </header>
    );
}

