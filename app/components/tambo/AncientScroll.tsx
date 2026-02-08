'use client';

import ReactMarkdown from 'react-markdown';

interface AncientScrollProps {
    title: string;
    content: string;
    category: 'tutorial' | 'concept' | 'history' | 'reference';
    difficulty?: 'beginner' | 'intermediate' | 'advanced' | 'master';
}

/**
 * Ancient Scroll component for long-form knowledge articles
 * 
 * AI renders this for tutorials, concept explanations, or detailed references.
 * Supports markdown formatting and categorization.
 */
export function AncientScroll({ title = 'Knowledge Archive', content = '*Knowledge awaits...*', category = 'concept', difficulty }: AncientScrollProps) {
    const categoryColors = {
        tutorial: 'border-sith-gold',
        concept: 'border-sith-gold-light',
        history: 'border-sith-red',
        reference: 'border-sith-cyan',
    };

    const difficultyLabels = {
        beginner: 'INITIATE LEVEL',
        intermediate: 'APPRENTICE LEVEL',
        advanced: 'MASTER LEVEL',
        master: 'DARK LORD LEVEL',
    };

    return (
        <div className="my-6 space-y-4 fade-scale">
            {/* Scroll Header */}
            <div className={`glass-card p-6 border-l-4 ${categoryColors[category]}`}>
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="font-jetbrains text-xs text-sith-gold uppercase tracking-wider opacity-80">
                                📜 {category}
                            </span>
                            {difficulty && (
                                <>
                                    <span className="text-sith-text-muted opacity-40">•</span>
                                    <span className="font-jetbrains text-xs text-sith-gold-light uppercase tracking-wide">
                                        {difficultyLabels[difficulty]}
                                    </span>
                                </>
                            )}
                        </div>
                        <h2 className="font-orbitron text-2xl font-bold tracking-wider text-sith-gold uppercase">
                            {title}
                        </h2>
                    </div>

                    {/* Scroll icon decoration */}
                    <div className="w-12 h-12 border-2 border-sith-gold rounded flex items-center justify-center opacity-60">
                        <svg className="w-6 h-6 text-sith-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                </div>

                <div className="tech-corners" />
            </div>

            {/* Scroll Content */}
            <div className="glass-card-light p-8">
                <div className="prose prose-invert max-w-none">
                    <ReactMarkdown
                        components={{
                            h1: ({ node, ...props }) => (
                                <h1 className="font-orbitron text-xl font-bold text-sith-gold uppercase tracking-wide mb-4 mt-6" {...props} />
                            ),
                            h2: ({ node, ...props }) => (
                                <h2 className="font-orbitron text-lg font-bold text-sith-gold-light uppercase tracking-wide mb-3 mt-5" {...props} />
                            ),
                            h3: ({ node, ...props }) => (
                                <h3 className="font-jetbrains text-base font-bold text-sith-text-secondary mb-2 mt-4" {...props} />
                            ),
                            p: ({ node, ...props }) => (
                                <p className="font-jetbrains text-sm text-sith-text-primary leading-relaxed mb-4" {...props} />
                            ),
                            ul: ({ node, ...props }) => (
                                <ul className="font-jetbrains text-sm text-sith-text-primary list-disc list-inside space-y-2 mb-4" {...props} />
                            ),
                            ol: ({ node, ...props }) => (
                                <ol className="font-jetbrains text-sm text-sith-text-primary list-decimal list-inside space-y-2 mb-4" {...props} />
                            ),
                            code: ({ node, inline, ...props }: any) => (
                                inline ? (
                                    <code className="bg-black bg-opacity-50 text-sith-gold px-2 py-0.5 rounded font-jetbrains text-xs" {...props} />
                                ) : (
                                    <code className="block bg-black bg-opacity-50 text-sith-text-primary p-4 rounded font-jetbrains text-xs overflow-x-auto" {...props} />
                                )
                            ),
                            blockquote: ({ node, ...props }) => (
                                <blockquote className="border-l-2 border-sith-red pl-4 italic text-sith-red-light opacity-80 my-4" {...props} />
                            ),
                        }}
                    >
                        {content}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
}
