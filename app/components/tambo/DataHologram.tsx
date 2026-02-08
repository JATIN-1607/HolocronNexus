'use client';

import { Bar, Line, Pie, Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    RadialLinearScale,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    RadialLinearScale,
    Title,
    Tooltip,
    Legend
);

interface DataPoint {
    label: string;
    value: number;
}

interface DataHologramProps {
    type: 'bar' | 'line' | 'pie' | 'radar';
    data: DataPoint[];
    title: string;
    description?: string;
}

/**
 * Data Hologram component for visualizing data
 * 
 * AI uses this for statistics, comparisons, or data analysis with Sith-themed charts.
 */
export function DataHologram({ type = 'bar', data = [{ label: 'Sample', value: 100 }], title = 'Data Visualization', description }: DataHologramProps) {
    const chartData = {
        labels: data.map(d => d.label),
        datasets: [
            {
                label: title,
                data: data.map(d => d.value),
                backgroundColor: type === 'pie' ? [
                    'rgba(220, 38, 38, 0.8)',
                    'rgba(220, 38, 38, 0.6)',
                    'rgba(220, 38, 38, 0.4)',
                    'rgba(220, 38, 38, 0.2)',
                ] : 'rgba(220, 38, 38, 0.6)',
                borderColor: 'rgba(220, 38, 38, 1)',
                borderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: type === 'pie',
                labels: {
                    color: '#dc2626',
                    font: {
                        family: 'JetBrains Mono',
                        size: 11,
                    },
                },
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                titleColor: '#dc2626',
                bodyColor: '#ef4444',
                borderColor: '#dc2626',
                borderWidth: 1,
                titleFont: {
                    family: 'Orbitron',
                    size: 12,
                },
                bodyFont: {
                    family: 'JetBrains Mono',
                    size: 11,
                },
            },
        },
        scales: type !== 'pie' && type !== 'radar' ? {
            y: {
                ticks: {
                    color: '#991b1b',
                    font: {
                        family: 'JetBrains Mono',
                        size: 10,
                    },
                },
                grid: {
                    color: 'rgba(220, 38, 38, 0.1)',
                },
            },
            x: {
                ticks: {
                    color: '#dc2626',
                    font: {
                        family: 'JetBrains Mono',
                        size: 10,
                    },
                },
                grid: {
                    color: 'rgba(220, 38, 38, 0.1)',
                },
            },
        } : type === 'radar' ? {
            r: {
                ticks: {
                    color: '#991b1b',
                    backdropColor: 'transparent',
                },
                grid: {
                    color: 'rgba(220, 38, 38, 0.2)',
                },
                pointLabels: {
                    color: '#dc2626',
                    font: {
                        family: 'JetBrains Mono',
                        size: 10,
                    },
                },
            },
        } : undefined,
    };

    const renderChart = () => {
        switch (type) {
            case 'bar':
                return <Bar data={chartData} options={options} />;
            case 'line':
                return <Line data={chartData} options={options} />;
            case 'pie':
                return <Pie data={chartData} options={options} />;
            case 'radar':
                return <Radar data={chartData} options={options} />;
            default:
                return null;
        }
    };

    return (
        <div className="my-6 glass-card p-6 space-y-4 fade-in">
            <div>
                <h3 className="font-orbitron text-lg tracking-wider text-sith-red uppercase">
                    {title}
                </h3>
                {description && (
                    <p className="font-jetbrains text-xs text-sith-red-light mt-1 opacity-70">
                        {description}
                    </p>
                )}
            </div>

            <div className="relative p-4 bg-black bg-opacity-30 rounded">
                {renderChart()}
            </div>

            <div className="tech-corners tech-corners-bottom" />
        </div>
    );
}
