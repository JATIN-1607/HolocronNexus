interface ProgressBarProps {
    label: string;
    value: number;
    showPercentage?: boolean;
}

export default function ProgressBar({ label, value, showPercentage = true }: ProgressBarProps) {
    return (
        <div className="space-y-2">
            <div className="flex justify-between items-center">
                <span className="text-sith-red font-jetbrains text-sm tracking-wider uppercase">
                    {label}
                </span>
                {showPercentage && (
                    <span className="text-sith-red-light font-jetbrains text-xs font-bold">
                        {value}%
                    </span>
                )}
            </div>
            <div className="progress-bar-container">
                <div
                    className="progress-bar-fill"
                    style={{ width: `${value}%` }}
                />
            </div>
        </div>
    );
}
