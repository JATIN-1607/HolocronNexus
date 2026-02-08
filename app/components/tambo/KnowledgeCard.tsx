'use client';

interface KnowledgeCardProps {
    title: string;
    content: string;
    type: 'tip' | 'warning' | 'info' | 'success';
    actionLabel?: string;
}

/**
 * Knowledge Card component for quick tips and information
 * 
 * AI uses this for condensed information, warnings, or quick tips.
 */
export function KnowledgeCard({ title = 'Information', content = 'Details...', type = 'info', actionLabel }: KnowledgeCardProps) {
    const typeStyles = {
        tip: {
            border: 'border-sith-cyan',
            bg: 'bg-gradient-to-br from-sith-cyan/10 to-transparent',
            icon: '💡',
            titleColor: 'text-sith-cyan',
        },
        warning: {
            border: 'border-sith-gold',
            bg: 'bg-gradient-to-br from-sith-gold/15 to-transparent',
            icon: '⚠️',
            titleColor: 'text-sith-gold',
        },
        info: {
            border: 'border-sith-cyan-light',
            bg: 'bg-gradient-to-br from-sith-cyan/10 to-transparent',
            icon: 'ℹ️',
            titleColor: 'text-sith-cyan-light',
        },
        success: {
            border: 'border-sith-green',
            bg: 'bg-gradient-to-br from-sith-green/15 to-transparent',
            icon: '✓',
            titleColor: 'text-sith-green',
        },
    };

    const style = typeStyles[type];

    return (
        <div className={`my-4 glass-card border-l-4 ${style.border} ${style.bg} p-5 fade-scale`}>
            <div className="flex items-start gap-3">
                <div className="text-2xl mt-0.5">{style.icon}</div>
                <div className="flex-1 space-y-2">
                    <h4 className={`font-orbitron text-sm font-bold tracking-wider ${style.titleColor} uppercase`}>
                        {title}
                    </h4>
                    <p className="font-jetbrains text-sm text-sith-text-primary leading-relaxed">
                        {content}
                    </p>
                    {actionLabel && (
                        <button className={`mt-3 font-jetbrains text-xs ${style.titleColor} hover:opacity-80 uppercase tracking-wide transition-opacity`}>
                            {actionLabel} →
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
