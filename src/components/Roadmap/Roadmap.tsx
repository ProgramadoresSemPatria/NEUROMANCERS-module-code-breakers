import "@xyflow/react/dist/style.css";
import React, { useCallback } from "react";
import {
	ReactFlow,
	useNodesState,
	useEdgesState,
	addEdge,
	Connection,
	Edge,
} from "@xyflow/react";
import CustomNode from "./CustomNode";
import { roadmapNodes } from "./Nodes";
import { roadmapEdges } from "./Edges";

const roadmapStyle = {
	backgroundColor: "#202225",
};

const nodeTypes = {
	custom: CustomNode,
};

const proOptions = { hideAttribution: true };

const Roadmap: React.FC = () => {
	const [nodes, setNodes, onNodesChange] = useNodesState(roadmapNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(roadmapEdges);

	const onConnect = useCallback(
		(params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
		[setEdges]
	);

	return (
		<div className="pt-20 w-full h-screen">
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				proOptions={proOptions}
				onConnect={onConnect}
				nodeTypes={nodeTypes}
				style={roadmapStyle}
				nodesConnectable={false}
				defaultViewport={{ x: 1250, y: 300, zoom: 1 }}
			/>
		</div>
	);
};

export default Roadmap;

