'use client';

import { TamboProvider } from '@tambo-ai/react';
import { tamboComponents } from './tambo';

interface TamboWrapperProps {
    children: React.ReactNode;
}

/**
 * Tambo Provider Wrapper
 * Configures Tambo with our custom Sith-themed components
 */
export function TamboWrapper({ children }: TamboWrapperProps) {
    const apiKey = process.env.NEXT_PUBLIC_TAMBO_API_KEY || '';

    if (!apiKey) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="glass-card p-8 max-w-md text-center space-y-4">
                    <h2 className="font-orbitron text-xl text-sith-red uppercase tracking-wide">
                        ⚠️ Configuration Required
                    </h2>
                    <p className="font-jetbrains text-sm text-sith-red-light">
                        The Holocron requires a Tambo API key to function. Please set NEXT_PUBLIC_TAMBO_API_KEY in your environment.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <TamboProvider
            apiKey={apiKey}
            components={tamboComponents}
        >
            {children}
        </TamboProvider>
    );
}
