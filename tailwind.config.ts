import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'sith': {
                    black: '#000000',
                    'black-light': '#0a0000',
                    gray: '#1a0808',
                    'gray-light': '#2a1010',
                    red: '#dc2626',
                    'red-dark': '#991b1b',
                    'red-light': '#ef4444',
                    'red-glow': '#fca5a5',
                    'red-bright': '#ff4444',
                    'text-primary': '#f5f5f5',
                    'text-secondary': '#fca5a5',
                    'text-muted': '#991b1b',
                    gold: '#fbbf24',
                    'gold-light': '#fcd34d',
                    purple: '#a855f7',
                    'purple-light': '#c084fc',
                    cyan: '#06b6d4',
                    'cyan-light': '#22d3ee',
                    green: '#10b981',
                    'green-light': '#34d399',
                },
            },
            fontFamily: {
                'orbitron': ['Orbitron', 'sans-serif'],
                'jetbrains': ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'scan': 'scan 4s linear infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'glow': 'glow 2s ease-in-out infinite',
                'grid-pan': 'grid-pan 20s linear infinite',
            },
            keyframes: {
                scan: {
                    '0%': { top: '0%' },
                    '100%': { top: '100%' },
                },
                glow: {
                    '0%, 100%': {
                        boxShadow: '0 0 5px rgba(220, 38, 38, 0.5), 0 0 10px rgba(220, 38, 38, 0.3)',
                    },
                    '50%': {
                        boxShadow: '0 0 20px rgba(220, 38, 38, 0.8), 0 0 30px rgba(220, 38, 38, 0.6)',
                    },
                },
                'grid-pan': {
                    '0%': { transform: 'translate(0, 0)' },
                    '100%': { transform: 'translate(40px, 40px)' },
                },
            },
            backdropBlur: {
                'glass': '12px',
            },
        },
    },
    plugins: [],
};

export default config;
