'use client';

import { useRouter } from 'next/navigation';
import BackgroundEffects from './components/BackgroundEffects';
import ProgressBar from './components/ProgressBar';

export default function Home() {
    const router = useRouter();

    const handleInitiateAccess = () => {
        router.push('/chat');
    };

    return (
        <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <BackgroundEffects />

            <div className="relative z-10 w-full max-w-4xl px-6">
                {/* 3D Holocron Centerpiece */}
                <div className="flex justify-center mb-16 slide-up opacity-0 stagger-1">
                    <div className="relative w-48 h-48 holocron-rotate" style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}>
                        {/* Holocron Core */}
                        <div className="absolute inset-0 border-4 border-sith-red"
                            style={{
                                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                                boxShadow: '0 0 50px rgba(220, 38, 38, 0.9), inset 0 0 50px rgba(220, 38, 38, 0.4)'
                            }}>
                        </div>
                        {/* Inner glow */}
                        <div className="absolute inset-4 border-2 border-sith-red-light opacity-70"
                            style={{
                                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                                boxShadow: '0 0 35px rgba(239, 68, 68, 0.7)'
                            }}>
                        </div>
                        {/* Center crystal */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-10 h-10 bg-sith-red glow-pulse rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Main Terminal Card */}
                <div className="glass-card tech-corners tech-corners-bottom p-10 md:p-14 space-y-8 slide-up opacity-0 stagger-2">
                    {/* Header */}
                    <div className="text-center space-y-3">
                        <h1 className="font-orbitron text-6xl md:text-7xl font-black tracking-[0.25em] text-sith-red text-glow uppercase glitch-hover leading-tight">
                            HOLOCRON
                        </h1>
                        <h2 className="font-orbitron text-2xl md:text-3xl font-bold tracking-[0.2em] text-sith-red-light uppercase">
                            NEXUS
                        </h2>
                        <div className="h-px w-2/3 mx-auto bg-gradient-to-r from-transparent via-sith-red to-transparent opacity-70 my-4" />
                        <p className="font-jetbrains text-xs tracking-widest text-sith-text-secondary opacity-80 uppercase">
                            🔐 Secure Terminal Access v2.4.7
                        </p>
                    </div>

                    {/* System Status Display */}
                    <div className="space-y-6 slide-up opacity-0 stagger-3">
                        <div className="flex items-center justify-center gap-3">
                            <div className="status-online" />
                            <span className="font-orbitron text-sm tracking-widest text-sith-red uppercase">
                                System Online
                            </span>
                        </div>

                        {/* Divider */}
                        <div className="divider-red" />

                        {/* System Metrics */}
                        <div className="space-y-4 py-2">
                            <h3 className="font-orbitron text-xs tracking-[0.3em] text-sith-gold uppercase text-center mb-5">
                                ⚡ System Diagnostics
                            </h3>

                            <ProgressBar label="CPU Load" value={92} />
                            <ProgressBar label="Data Integrity" value={87} />
                            <ProgressBar label="Storage" value={64} />
                        </div>

                        {/* Divider */}
                        <div className="divider-red" />

                        {/* Security Notice */}
                        <div className="glass-card-light p-5 space-y-2 border-l-4 border-sith-gold">
                            <p className="font-jetbrains text-xs text-sith-gold text-center tracking-wide font-semibold">
                                ⚠️ AUTHORIZED ACCESS ONLY
                            </p>
                            <p className="font-jetbrains text-[10px] text-sith-text-muted text-center tracking-wider opacity-70">
                                CLASSIFIED LEVEL: SITH ETERNAL
                            </p>
                        </div>
                    </div>

                    {/* Access Button */}
                    <div className="flex justify-center pt-6 slide-up opacity-0 stagger-4">
                        <button
                            onClick={handleInitiateAccess}
                            className="ghost-button relative group z-10 px-8 py-4"
                            type="button"
                        >
                            <span className="relative z-10 text-sm tracking-widest">Initiate Access Protocol</span>
                            {/* Button glow effect */}
                            <div className="absolute inset-0 bg-sith-red opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 pointer-events-none"></div>
                        </button>
                    </div>

                    {/* Footer Info */}
                    <div className="text-center space-y-2 pt-6 slide-up opacity-0 stagger-5">
                        <p className="font-jetbrains text-[11px] text-sith-text-muted tracking-wider uppercase opacity-70">
                            📍 Korriban Central Archives
                        </p>
                        <p className="font-jetbrains text-[10px] text-sith-text-muted tracking-wider opacity-50">
                            Last Access: 3,647 Standard Years Ago
                        </p>
                    </div>
                </div>

                {/* Floating Side Elements */}
                <div className="absolute -left-20 top-1/4 opacity-20 float">
                    <div className="w-40 h-40 border border-sith-purple"
                        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                    />
                </div>
                <div className="absolute -right-20 bottom-1/4 opacity-20 float" style={{ animationDelay: '3s' }}>
                    <div className="w-32 h-32 border border-sith-cyan"
                        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                    />
                </div>
            </div>
        </main>
    );
}

