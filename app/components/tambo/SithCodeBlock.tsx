'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';

interface SithCodeBlockProps {
    code: string;
    language: string;
    title?: string;
    explanation?: string;
}

/**
 * Sith-themed code block component for Tambo generative UI
 * 
 * Displays code with dark syntax highlighting, copy functionality,
 * and optional explanation. AI dynamically renders this when showing code examples.
 */
export function SithCodeBlock({ code = '// Code example', language = 'javascript', title, explanation }: SithCodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Custom Sith-themed syntax highlighting
    const customTheme = {
        ...vscDarkPlus,
        'pre[class*="language-"]': {
            ...vscDarkPlus['pre[class*="language-"]'],
            background: 'rgba(5, 0, 0, 0.95)',
            border: '1px solid rgba(220, 38, 38, 0.3)',
            borderRadius: '8px',
            margin: '0',
        },
    };

    return (
        <div className="my-6 space-y-3 fade-scale">
            {/* Header */}
            <div className="flex items-center justify-between">
                {title && (
                    <h3 className="font-orbitron text-sm tracking-wider text-sith-red uppercase flex items-center gap-2">
                        <span className="text-sith-red">{'</>'}</span> {title}
                    </h3>
                )}
                <div className="flex items-center gap-2">
                    <span className="font-jetbrains text-xs text-sith-text-secondary uppercase opacity-70">
                        {language}
                    </span>
                    <button
                        onClick={handleCopy}
                        className="group relative px-3 py-1 border border-sith-red text-sith-red-light hover:border-sith-red-bright hover:text-sith-red-bright transition-all text-xs font-jetbrains tracking-wide rounded"
                    >
                        {copied ? '✓ COPIED' : 'COPY'}
                    </button>
                </div>
            </div>

            {/* Code Block */}
            <div className="relative glass-card border-l-4 border-sith-red !p-0 overflow-hidden">
                <SyntaxHighlighter
                    language={language}
                    style={customTheme}
                    customStyle={{
                        padding: '20px',
                        margin: 0,
                        fontSize: '13px',
                        lineHeight: '1.6',
                    }}
                    showLineNumbers
                    lineNumberStyle={{
                        color: 'rgba(220, 38, 38, 0.3)',
                        paddingRight: '16px',
                        fontFamily: 'JetBrains Mono',
                    }}
                >
                    {code}
                </SyntaxHighlighter>

                {/* Tech corners */}
                <div className="tech-corners tech-corners-bottom" />
            </div>

            {/* Explanation */}
            {explanation && (
                <div className="glass-card-light p-4 border-l-2 border-sith-red-glow">
                    <p className="font-jetbrains text-sm text-sith-text-primary leading-relaxed">
                        💡 {explanation}
                    </p>
                </div>
            )}
        </div>
    );
}
