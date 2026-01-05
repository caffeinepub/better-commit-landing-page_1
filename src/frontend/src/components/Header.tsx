export function Header() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                        <span className="text-sm font-bold text-primary-foreground">BC</span>
                    </div>
                    <span className="text-lg font-semibold tracking-tight">Better Commit</span>
                </div>
            </div>
        </header>
    );
}
