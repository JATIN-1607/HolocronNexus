export default function LoadingState() {
    return (
        <div className="flex flex-col items-center justify-center space-y-6 p-12">
            <div className="relative">
                {/* Rotating hexagon */}
                <div className="w-16 h-16 relative animate-spin" style={{ animationDuration: '3s' }}>
                    <div
                        className="absolute inset-0 border-2 border-sith-red"
                        style={{
                            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        }}
                    />
                </div>

                {/* Inner pulsing core */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 bg-sith-red rounded-full animate-pulse-slow"
                        style={{
                            boxShadow: '0 0 20px rgba(220, 38, 38, 0.8), 0 0 40px rgba(220, 38, 38, 0.6)'
                        }}
                    />
                </div>
            </div>

            <div className="text-center space-y-2">
                <p className="text-sith-red font-orbitron text-lg tracking-[0.3em] uppercase">
                    Encryption Protocols
                </p>
                <p className="text-sith-red-light font-jetbrains text-xs tracking-wider uppercase opacity-70">
                    Establishing Connection...
                </p>
            </div>

            {/* Loading bar */}
            <div className="w-64 h-1 bg-black border border-sith-red-dark overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-sith-red-dark via-sith-red to-sith-red-dark animate-pulse"
                    style={{
                        boxShadow: '0 0 10px rgba(220, 38, 38, 0.8)',
                    }}
                />
            </div>
        </div>
    );
}
