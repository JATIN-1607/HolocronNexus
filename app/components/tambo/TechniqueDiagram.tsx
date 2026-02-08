'use client';

import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface TechniqueDiagramProps {
    type: 'flowchart' | 'sequence' | 'class' | 'state';
    mermaidCode: string;
    title: string;
    description?: string;
}

/**
 * Technique Diagram component for visual flowcharts and diagrams
 * 
 * AI uses this for explaining architecture, workflows, or relationships using Mermaid syntax.
 */
export function TechniqueDiagram({ type, mermaidCode, title = 'Diagram', description }: TechniqueDiagramProps) {
    const mermaidRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mermaidRef.current) {
            mermaid.initialize({
                startOnLoad: true,
                theme: 'dark',
                themeVariables: {
                    primaryColor: '#dc2626',
                    primaryTextColor: '#ef4444',
                    primaryBorderColor: '#991b1b',
                    lineColor: '#dc2626',
                    secondaryColor: '#991b1b',
                    tertiaryColor: '#450a0a',
                    background: '#000000',
                    mainBkg: '#0a0000',
                    secondBkg: '#1a0000',
                    textColor: '#ef4444',
                    fontSize: '14px',
                    fontFamily: 'JetBrains Mono',
                },
            });

            mermaidRef.current.innerHTML = mermaidCode;
            mermaid.run({
                nodes: [mermaidRef.current],
            });
        }
    }, [mermaidCode]);

    return (
        <div className="my-6 space-y-4 fade-in">
            <div>
                <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-orbitron text-lg tracking-wider text-sith-red uppercase">
                        {title}
                    </h3>
                    <span className="font-jetbrains text-xs text-sith-red-dark uppercase opacity-60">
                        {type}
                    </span>
                </div>
                {description && (
                    <p className="font-jetbrains text-xs text-sith-red-light opacity-70">
                        {description}
                    </p>
                )}
            </div>

            <div className="glass-card p-8 overflow-x-auto">
                <div
                    ref={mermaidRef}
                    className="mermaid flex justify-center items-center min-h-[200px]"
                />
            </div>
        </div>
    );
}
