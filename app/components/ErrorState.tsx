interface ErrorStateProps {
    message?: string;
}

export default function ErrorState({ message = "Connection severed. The Holocron cannot be reached." }: ErrorStateProps) {
    return (
        <div className="flex flex-col items-center justify-center space-y-6 p-12">
            {/* Alert Icon - Custom X in hexagon */}
            <div className="relative">
                <div
                    className="w-20 h-20 border-2 border-sith-red animate-pulse-slow"
                    style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        boxShadow: '0 0 30px rgba(220, 38, 38, 0.6), inset 0 0 20px rgba(220, 38, 38, 0.2)',
                    }}
                >
                    {/* X marks */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-8 h-8">
                            <div
                                className="absolute top-1/2 left-0 w-full h-0.5 bg-sith-red"
                                style={{
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    boxShadow: '0 0 5px rgba(220, 38, 38, 0.8)',
                                }}
                            />
                            <div
                                className="absolute top-1/2 left-0 w-full h-0.5 bg-sith-red"
                                style={{
                                    transform: 'translateY(-50%) rotate(-45deg)',
                                    boxShadow: '0 0 5px rgba(220, 38, 38, 0.8)',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center space-y-3 max-w-md">
                <p className="text-sith-red font-orbitron text-2xl tracking-[0.3em] uppercase">
                    Severed Connection
                </p>
                <p className="text-sith-red-light font-jetbrains text-sm tracking-wide opacity-80">
                    {message}
                </p>
                <p className="text-sith-red-dark font-jetbrains text-xs tracking-wider uppercase opacity-60 mt-4">
                    Protocol Breach Detected
                </p>
            </div>

            {/* Warning bars */}
            <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="w-2 h-8 bg-sith-red-dark animate-pulse"
                        style={{
                            animationDelay: `${i * 0.2}s`,
                            boxShadow: '0 0 5px rgba(220, 38, 38, 0.6)',
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
