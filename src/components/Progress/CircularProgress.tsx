import React from "react";

interface CircularProgressProps {
	value: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ value }) => {
	const radius = 30;
	const strokeWidth = 4;
	const circumference = 2 * Math.PI * radius;
	const offset = circumference - (value / 100) * circumference;

	return (
		<div className="relative flex justify-center items-center">
			<svg className="transform rotate-90" width={70} height={70}>
				<circle
					cx={35}
					cy={35}
					r={radius}
					stroke="lightgray"
					strokeWidth={strokeWidth}
					fill="none"
				/>
			</svg>

			<svg
				className="transform rotate-90"
				width={70}
				height={70}
				style={{ position: "absolute" }}
			>
				<circle
					cx={35}
					cy={35}
					r={radius}
					stroke="blue"
					strokeWidth={strokeWidth}
					fill="none"
					strokeDasharray={circumference}
					strokeDashoffset={offset}
					style={{ transition: "stroke-dashoffset 0.3s ease" }}
				/>
			</svg>

			<span className="absolute text-sm font-medium text-blue-500">
				{Math.round(value)}%
			</span>
		</div>
	);
};

export default CircularProgress;

