'use client';

import { useState } from 'react';

interface ChecklistItem {
    id: string;
    text: string;
    completed: boolean;
}

interface RitualChecklistProps {
    title: string;
    items: ChecklistItem[];
    description?: string;
}

/**
 * Ritual Checklist component for multi-step tasks
 * 
 * AI uses this for tutorials, setup guides, or learning paths with trackable progress.
 */
export function RitualChecklist({ title = 'Checklist', items: initialItems, description }: RitualChecklistProps) {
    // Ensure all items have completed field
    const normalizedItems = initialItems.map(item => ({
        ...item,
        completed: item.completed ?? false
    }));
    const [items, setItems] = useState(normalizedItems);

    const toggleItem = (id: string) => {
        setItems(prev =>
            prev.map(item =>
                item.id === id ? { ...item, completed: !item.completed } : item
            )
        );
    };

    const completedCount = items.filter(i => i.completed).length;
    const progress = (completedCount / items.length) * 100;

    return (
        <div className="my-6 glass-card p-6 space-y-5 fade-in">
            {/* Header */}
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <h3 className="font-orbitron text-lg tracking-wider text-sith-red uppercase">
                        {title}
                    </h3>
                    <span className="font-jetbrains text-sm text-sith-red-light">
                        {completedCount}/{items.length}
                    </span>
                </div>

                {description && (
                    <p className="font-jetbrains text-xs text-sith-red-light opacity-70">
                        {description}
                    </p>
                )}

                {/* Progress Bar */}
                <div className="progress-bar-container !h-2">
                    <div
                        className="progress-bar-fill"
                        style={{
                            width: `${progress}%`,
                            transition: 'width 0.5s ease',
                        }}
                    />
                </div>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3">
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className={`flex items-start gap-3 p-3 rounded border transition-all ${item.completed
                            ? 'border-sith-red bg-sith-red bg-opacity-5'
                            : 'border-sith-red-dark bg-black bg-opacity-20 hover:border-sith-red'
                            }`}
                    >
                        <button
                            onClick={() => toggleItem(item.id)}
                            className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${item.completed
                                ? 'border-sith-red bg-sith-red'
                                : 'border-sith-red-dark hover:border-sith-red'
                                }`}
                        >
                            {item.completed && (
                                <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            )}
                        </button>

                        <div className="flex-1">
                            <div className="flex items-center gap-2">
                                <span className="font-jetbrains text-xs text-sith-red-dark opacity-60">
                                    {index + 1}.
                                </span>
                                <span
                                    className={`font-jetbrains text-sm transition-all ${item.completed
                                        ? 'text-sith-red-light line-through opacity-60'
                                        : 'text-sith-red-light'
                                        }`}
                                >
                                    {item.text}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Completion Message */}
            {progress === 100 && (
                <div className="glass-card-light p-4 border-l-4 border-sith-red">
                    <p className="font-orbitron text-sm text-sith-red tracking-wide uppercase">
                        ✓ Ritual Complete - Power Unlocked
                    </p>
                </div>
            )}

            <div className="tech-corners tech-corners-bottom" />
        </div>
    );
}
