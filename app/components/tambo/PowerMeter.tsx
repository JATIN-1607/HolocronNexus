'use client';

import { useEffect, useState } from 'react';

interface PowerMeterProps {
    skill: string;
    level: number;
    description?: string;
}

/**
 * Power Meter component for visualizing skill/mastery levels
 * 
 * AI uses this to show user progress, skill ratings, or proficiency levels
 * with animated progress bar and Sith-themed styling.
 */
export function PowerMeter({ skill = 'Skill Level', level = 50, description }: PowerMeterProps) {
    const [displayLevel, setDisplayLevel] = useState(0);

    // Animate the level on mount
    useEffect(() => {
        const timer = setTimeout(() => {
            setDisplayLevel(level);
        }, 100);
        return () => clearTimeout(timer);
    }, [level]);

    // Determine power tier
    const getTier = (lvl: number): { name: string; color: string } => {
        if (lvl >= 90) return { name: 'DARK LORD', color: 'text-sith-purple' };
        if (lvl >= 75) return { name: 'SITH MASTER', color: 'text-sith-purple-light' };
        if (lvl >= 50) return { name: 'APPRENTICE', color: 'text-sith-gold' };
        if (lvl >= 25) return { name: 'ACOLYTE', color: 'text-sith-gold-light' };
        return { name: 'INITIATE', color: 'text-sith-text-secondary' };
    };

    const tier = getTier(level);

    return (
        <div className="my-6 glass-card border-l-4 border-sith-purple p-6 space-y-4 fade-scale">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="font-orbitron text-lg tracking-wider text-sith-purple uppercase flex items-center gap-2">
                        ⚡ {skill}
                    </h3>
                    {description && (
                        <p className="font-jetbrains text-xs text-sith-text-primary mt-1 opacity-80">
                            {description}
                        </p>
                    )}
                </div>
                <div className="text-right">
                    <div className={`font-orbitron text-sm tracking-widest ${tier.color} uppercase`}>
                        {tier.name}
                    </div>
                    <div className="font-jetbrains text-2xl font-bold text-sith-gold mt-1">
                        {level}%
                    </div>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
                <div className="progress-bar-container !h-4">
                    <div
                        className="progress-bar-fill"
                        style={{
                            width: `${displayLevel}%`,
                            transition: 'width 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                        }}
                    />
                </div>

                {/* Level Markers */}
                <div className="flex justify-between font-jetbrains text-[10px] text-sith-red-dark uppercase tracking-wide opacity-50">
                    <span>Initiate</span>
                    <span>Acolyte</span>
                    <span>Apprentice</span>
                    <span>Master</span>
                    <span>Lord</span>
                </div>
            </div>

            {/* Tech corners */}
            <div className="tech-corners tech-corners-bottom" />
        </div>
    );
}
