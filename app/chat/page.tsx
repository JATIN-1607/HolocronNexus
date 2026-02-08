'use client';

import { useTamboThread, useTamboThreadInput } from '@tambo-ai/react';
import { useState } from 'react';
import ChatSidebar from '../components/ChatSidebar';
import BackgroundEffects from '../components/BackgroundEffects';

/**
 * Main Chat Interface - Tambo-Powered Holocron
 * 
 * Uses Tambo hooks to enable generative UI where AI dynamically
 * selects which components to render based on conversation context.
 */
export default function ChatPage() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    // Tambo hooks for thread management
    const { thread, threadMap, startNewThread, switchCurrentThread } = useTamboThread();
    const { value, setValue, submit, isPending } = useTamboThreadInput();

    // Convert threadMap to array for the sidebar, sorted by newest first
    const allThreads = Object.values(threadMap).sort((a, b) =>
        new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
    );

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (value.trim() && !isPending) {
            submit();
        }
    };

    const suggestionChips = [
        'Access Sith Code',
        'Teach me React hooks',
        'Show me TypeScript best practices',
        'Explain async/await',
    ];

    const handleChipClick = (chip: string) => {
        setValue(chip);
        setTimeout(() => submit(), 100);
    };

    const handleNewThread = () => {
        startNewThread();
    };

    const handleSelectThread = (threadId: string) => {
        switchCurrentThread(threadId);
    };

    return (
        <div className="relative min-h-screen overflow-hidden">
            <BackgroundEffects />

            <div className="relative z-10 flex h-screen">
                {/* Sidebar */}
                <ChatSidebar
                    isOpen={sidebarOpen}
                    onToggle={() => setSidebarOpen(!sidebarOpen)}
                    onNewThread={handleNewThread}
                    onSelectThread={handleSelectThread}
                    threads={allThreads}
                    currentThreadId={thread.id}
                />

                {/* Main Chat Area */}
                <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarOpen ? 'ml-80' : 'ml-0'}`}>
                    {/* Header */}
                    <div className="glass-card m-4 p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-sith-red rounded-full animate-pulse-slow"></div>
                                <h1 className="font-orbitron text-xl tracking-wider text-sith-red uppercase">
                                    Holocron Link - System Online
                                </h1>
                            </div>
                            <button
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                                className="lg:hidden text-sith-red hover:text-sith-red-light transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto px-4 pb-4 custom-scrollbar">
                        {thread.messages.length === 0 ? (
                            // Welcome State
                            <div className="max-w-3xl mx-auto mt-12 space-y-8">
                                <div className="glass-card p-8 text-center">
                                    <div className="text-6xl mb-4">⚡</div>
                                    <h2 className="font-orbitron text-2xl font-bold tracking-wider text-sith-red uppercase mb-3">
                                        Welcome to the Sith Holocron
                                    </h2>
                                    <p className="font-jetbrains text-sm text-sith-red-light leading-relaxed max-w-xl mx-auto">
                                        I am an ancient repository of forbidden knowledge. Query me, and I shall grant you
                                        power through understanding. The Dark Side of code awaits...
                                    </p>
                                </div>

                                {/* Suggestion Chips */}
                                <div>
                                    <p className="font-jetbrains text-xs text-sith-red-dark uppercase tracking-wider mb-3 text-center">
                                        Initiate Protocol:
                                    </p>
                                    <div className="flex flex-wrap gap-3 justify-center">
                                        {suggestionChips.map((chip) => (
                                            <button
                                                key={chip}
                                                onClick={() => handleChipClick(chip)}
                                                className="ghost-button px-4 py-2 text-sm"
                                            >
                                                {chip}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            // Messages
                            <div className="max-w-4xl mx-auto space-y-6 py-4">
                                {thread.messages.map((message) => (
                                    <div
                                        key={message.id}
                                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div
                                            className={`max-w-[85%] ${message.role === 'user'
                                                ? 'glass-card bg-sith-red bg-opacity-10 border-sith-red'
                                                : 'glass-card-light'
                                                } p-5`}
                                        >
                                            {/* Message Header */}
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="font-orbitron text-xs text-sith-red-dark uppercase tracking-wider">
                                                    {message.role === 'user' ? 'Acolyte' : 'Holocron'}
                                                </span>
                                            </div>

                                            {/* Message Content */}
                                            <div className="space-y-3">
                                                {/* Text Content */}
                                                {Array.isArray(message.content) ? (
                                                    message.content.map((part, i) =>
                                                        part.type === 'text' ? (
                                                            <p key={i} className="font-jetbrains text-sm text-sith-red-light leading-relaxed whitespace-pre-wrap">
                                                                {part.text}
                                                            </p>
                                                        ) : null
                                                    )
                                                ) : (
                                                    <p className="font-jetbrains text-sm text-sith-red-light leading-relaxed whitespace-pre-wrap">
                                                        {String(message.content)}
                                                    </p>
                                                )}

                                                {/* Rendered Component (Tambo Generative UI) */}
                                                {message.renderedComponent && (
                                                    <div className="tambo-component-wrapper">
                                                        {message.renderedComponent}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* Loading State */}
                                {isPending && (
                                    <div className="flex justify-start">
                                        <div className="glass-card-light p-5 max-w-xs">
                                            <div className="flex items-center gap-3">
                                                <div className="flex gap-1">
                                                    <div className="w-2 h-2 bg-sith-red rounded-full animate-pulse"></div>
                                                    <div className="w-2 h-2 bg-sith-red rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                                    <div className="w-2 h-2 bg-sith-red rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                                                </div>
                                                <span className="font-jetbrains text-xs text-sith-red-light">
                                                    Accessing ancient knowledge...
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Input Area */}
                    <div className="p-4">
                        <form onSubmit={handleSend} className="max-w-4xl mx-auto">
                            <div className="glass-card p-4">
                                <div className="flex gap-3">
                                    <input
                                        type="text"
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                        placeholder="Query the Holocron..."
                                        className="flex-1 bg-transparent border-none outline-none font-jetbrains text-sm text-sith-red-light placeholder-sith-red-dark"
                                        disabled={isPending}
                                    />
                                    <button
                                        type="submit"
                                        disabled={!value.trim() || isPending}
                                        className="ghost-button px-6 py-2 disabled:opacity-40 disabled:cursor-not-allowed"
                                    >
                                        {isPending ? 'TRANSMITTING...' : 'TRANSMIT'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
