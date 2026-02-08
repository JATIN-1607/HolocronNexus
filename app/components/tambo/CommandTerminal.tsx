'use client';

import { useState } from 'react';

interface CommandTerminalProps {
    commands: string[];
    language?: string;
    title?: string;
    autoExecute?: boolean;
}

/**
 * Command Terminal component for showing CLI commands
 * 
 * AI uses this for CLI tutorials, setup instructions, or command demonstrations.
 */
export function CommandTerminal({ commands = ['echo "Hello World"'], language = 'bash', title, autoExecute = false }: CommandTerminalProps) {
    const [executedCommands, setExecutedCommands] = useState<Set<number>>(new Set());

    const handleExecute = (index: number) => {
        setExecutedCommands(prev => new Set(prev).add(index));
    };

    return (
        <div className="my-6 space-y-3 fade-scale">
            {title && (
                <h3 className="font-orbitron text-sm tracking-wider text-sith-green uppercase flex items-center gap-2">
                    <span className="text-sith-green">$</span> {title || 'Terminal'}
                </h3>
            )}

            <div className="glass-card border-l-4 border-sith-green !bg-black !bg-opacity-95 p-0 overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-2 border-b border-sith-green bg-sith-green bg-opacity-5">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-sith-red-dark"></div>
                        <div className="w-3 h-3 rounded-full bg-sith-gold"></div>
                        <div className="w-3 h-3 rounded-full bg-sith-green"></div>
                    </div>
                    <span className="font-jetbrains text-xs text-sith-green-light ml-2">
                        {language}
                    </span>
                </div>

                {/* Terminal Body */}
                <div className="p-4 space-y-3 font-jetbrains text-sm">
                    {commands.map((command, index) => (
                        <div key={index} className="space-y-1">
                            <div className="flex items-start gap-2">
                                <span className="text-sith-green select-none">$</span>
                                <span className="text-sith-text-primary flex-1">{command}</span>
                                {!autoExecute && (
                                    <button
                                        onClick={() => handleExecute(index)}
                                        disabled={executedCommands.has(index)}
                                        className="text-xs text-sith-green hover:text-sith-green-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                                    >
                                        {executedCommands.has(index) ? '✓' : '▶'}
                                    </button>
                                )}
                            </div>
                            {(autoExecute || executedCommands.has(index)) && (
                                <div className="text-sith-green opacity-60 text-xs pl-4">
                  // Command executed
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="tech-corners tech-corners-bottom" />
            </div>
        </div>
    );
}
