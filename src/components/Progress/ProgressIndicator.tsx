import React from "react";
import CircularProgress from "./CircularProgress";

const ProgressIndicator: React.FC = () => {
	return (
		<div className="fixed bottom-5 left-1/2 transform -translate-x-1/2">
			<CircularProgress value={0} />
		</div>
	);
};

export default ProgressIndicator;


