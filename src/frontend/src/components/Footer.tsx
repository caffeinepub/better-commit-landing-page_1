import { Heart } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t border-white/20 bg-background/50 backdrop-blur-sm">
            <div className="container flex h-16 items-center justify-center">
                <p className="flex items-center gap-2 text-sm text-white/80">
                    <span>© 2025. Built with</span>
                    <Heart className="h-4 w-4 fill-white text-white" />
                    <span>using</span>
                    <a
                        href="https://caffeine.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-white transition-colors hover:text-white/90"
                    >
                        caffeine.ai
                    </a>
                </p>
            </div>
        </footer>
    );
}

