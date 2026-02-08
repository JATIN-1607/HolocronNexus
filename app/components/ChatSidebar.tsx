'use client';

interface ChatSidebarProps {
    isOpen: boolean;
    onToggle: () => void;
    onNewThread?: () => void;
    onSelectThread?: (threadId: string) => void;
    threads?: any[];
    currentThreadId?: string;
}

export default function ChatSidebar({
    isOpen,
    onToggle,
    onNewThread,
    onSelectThread,
    threads = [],
    currentThreadId
}: ChatSidebarProps) {

    // Format timestamp to relative time
    const formatTimestamp = (timestamp: string | number) => {
        const date = new Date(timestamp);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 60) return `${diffMins} minutes ago`;
        if (diffHours < 24) return `${diffHours} hours ago`;
        if (diffDays < 7) return `${diffDays} days ago`;
        return date.toLocaleDateString();
    };

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-80 z-20"
                    onClick={onToggle}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
          fixed lg:relative
          top-0 left-0 h-full
          w-80 lg:w-80
          glass-card
          border-r-2 border-sith-red
          transition-transform duration-300 ease-in-out
          z-30
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
            >
                <div className="flex flex-col h-full p-6 space-y-6">
                    {/* Header */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="font-orbitron text-2xl font-bold tracking-[0.3em] text-sith-red uppercase">
                                Archives
                            </h2>
                            <button
                                onClick={onToggle}
                                className="lg:hidden text-sith-red hover:text-sith-red-light transition-colors"
                                aria-label="Close sidebar"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="h-px bg-gradient-to-r from-sith-red to-transparent" />
                    </div>

                    {/* New Thread Button */}
                    <button
                        onClick={onNewThread}
                        className="ghost-button w-full !py-3 !px-4 !text-xs hover:scale-105 transition-transform"
                    >
                        + New Inquiry
                    </button>

                    {/* Thread List */}
                    <div className="flex-1 overflow-y-auto space-y-3 custom-scrollbar">
                        <p className="font-jetbrains text-xs tracking-wider text-sith-red-dark uppercase opacity-60 mb-3">
                            Recent Sessions
                        </p>

                        {threads.length === 0 ? (
                            <div className="glass-card-light p-4">
                                <p className="font-jetbrains text-xs text-sith-text-muted text-center">
                                    No sessions yet. Start a new inquiry to begin.
                                </p>
                            </div>
                        ) : (
                            threads.map((thread) => (
                                <div
                                    key={thread.id}
                                    onClick={() => onSelectThread?.(thread.id)}
                                    className={`glass-card-light p-4 cursor-pointer hover:border-sith-red hover:bg-opacity-90 transition-all group ${currentThreadId === thread.id ? 'border-sith-red bg-opacity-90' : ''
                                        }`}
                                >
                                    <h3 className="font-jetbrains text-sm text-sith-red-light group-hover:text-sith-red transition-colors line-clamp-2">
                                        {thread.name || 'Untitled Session'}
                                    </h3>
                                    <p className="font-jetbrains text-[10px] text-sith-red-dark mt-2 tracking-wide">
                                        {formatTimestamp(thread.createdAt || thread.created_at || Date.now())}
                                    </p>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Footer Info */}
                    <div className="space-y-2 pt-4 border-t border-sith-red-dark">
                        <div className="flex items-center gap-2">
                            <div className="status-online" style={{ width: '8px', height: '8px' }} />
                            <span className="font-jetbrains text-xs text-sith-red-light tracking-wide">
                                Holocron Active
                            </span>
                        </div>
                        <p className="font-jetbrains text-[9px] text-sith-red-dark tracking-wider opacity-50">
                            Session: {currentThreadId ? `#${currentThreadId.slice(0, 8)}` : '#HX-2847-K'}
                        </p>
                    </div>
                </div>
            </aside>
        </>
    );
}
