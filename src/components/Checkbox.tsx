import React from "react";

interface PrettyCheckboxProps {
	label?: string;
	checked?: boolean;
	onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<PrettyCheckboxProps> = ({
	label = "Label",
	checked = false,
	onChange,
}) => {
	const handleCheckboxChange = () => {
		if (onChange) {
			onChange(!checked);
		}
	};

	return (
		<label className="inline-flex items-center cursor-pointer select-none group">
			<input
				type="checkbox"
				checked={checked}
				onChange={handleCheckboxChange}
				className="hidden"
			/>
			<div
				className={`w-5 h-5 flex items-center justify-center border-2 rounded-md transition-all duration-200 ${checked
						? "bg-blue-600 border-blue-600"
						: "border-gray-400 group-hover:border-blue-400"
					}`}
			>
				{checked && (
					<svg
						className="w-3.5 h-3.5 text-white"
						fill="none"
						stroke="currentColor"
						strokeWidth="2.5"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
					</svg>
				)}
			</div>
			{label && (
				<span className="ml-2 text-gray-800 transition-colors duration-200 group-hover:text-blue-600">
					{label}
				</span>
			)}
		</label>
	);
};

export default Checkbox;

