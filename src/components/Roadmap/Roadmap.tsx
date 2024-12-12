import "@xyflow/react/dist/style.css";
import React, { useCallback, useState, useEffect } from "react";
import {
	ReactFlow,
	useNodesState,
	useEdgesState,
	addEdge,
	Connection,
	Edge,
	Node,
} from "@xyflow/react";
import CustomNode from "./CustomNode";
import { roadmapNodes } from "./Nodes";
import { roadmapEdges } from "./Edges";
import Modal from "../Modal.tsx";
import PrerequisitesList, {
	isPrerequisitesArray,
} from "../PrerequisitesList.tsx";
import { CameraIcon } from "../../assets/CameraIcon.tsx";
import CircularProgress from "../Progress/CircularProgress.tsx";

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

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedNode, setSelectedNode] = useState<Node | null>(null);

	const onConnect = useCallback(
		(params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
		[setEdges]
	);

	const onNodeClick = (_event: React.MouseEvent, node: Node) => {
		console.log(node.data);
		setSelectedNode(node);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedNode(null);
	};

	const isNodeCompleted = (node: Node): boolean => {
		if (!node.data || !node.data.problems) return false;

		const problems = node.data.problems as any[];
		return problems.every((problem: any) => problem.status === true);
	};

	const calculateProgress = () => {
		if (!nodes) return 0;

		const totalNodes = nodes.length;
		const completedNodes = nodes.filter(isNodeCompleted).length;

		return (completedNodes / totalNodes) * 100;
	};

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				closeModal();
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<div style={{ width: "100vw", height: "100vh" }}>
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
				defaultViewport={{ x: 900, y: 150, zoom: 1 }}
				onNodeClick={onNodeClick}
			/>

			<div className="fixed bottom-5 left-1/2 transform -translate-x-1/2">
				<CircularProgress value={calculateProgress()} />
			</div>

			<Modal
				isOpen={isModalOpen}
				onClose={closeModal}
				content={
					<div style={{ maxHeight: "80vh", overflowY: "auto" }}>
						<div className="flex flex-col gap-8">
							<div>
								<h2 className="text-3xl font-bold mb-2 center">
									{typeof selectedNode?.data?.label === "string"
										? selectedNode.data.label
										: "No label available"}
								</h2>
							</div>
							<PrerequisitesList
								prerequisites={
									isPrerequisitesArray(selectedNode?.data?.prerequisites)
										? selectedNode.data.prerequisites
										: undefined
								}
							/>
						</div>
						<div>
							<h2 className="text-2xl font-bold mb-4 justify-center">
								Exercises:
							</h2>
							{Array.isArray(selectedNode?.data?.problems) &&
								selectedNode.data.problems.length > 0 ? (
								<table className="w-full border-collapse border border-gray-700 text-gray-300">
									<thead className="bg-zinc-900 text-white">
										<tr>
											<th className="border border-gray-700 p-2">Status</th>
											<th className="border border-gray-700 p-2">Star</th>
											<th className="border border-gray-700 p-2">Problem</th>
											<th className="border border-gray-700 p-2">Difficulty</th>
											<th className="border border-gray-700 p-2">Solution</th>
										</tr>
									</thead>
									<tbody>
										{selectedNode.data.problems.map(
											(problem: any, index: number) => (
												<tr key={index} className="hover:bg-gray-800">
													<td className="border border-gray-700 p-2 text-center">
														<input
															type="checkbox"
															checked={problem.status}
															className="scale-150"
															onChange={() => {
																problem.status = !problem.status;
																setNodes([...nodes]);
															}}
														/>
													</td>
													<td className="border border-gray-700 p-2 text-center">
														<button
															className={`text-2xl cursor-pointer ${problem.starred
																	? "text-yellow-500"
																	: "text-gray-400"
																} scale-150`}
															onClick={() => {
																problem.starred = !problem.starred;
																setNodes([...nodes]);
															}}
														>
															★
														</button>
													</td>
													<td className="border border-gray-700 p-2">
														<a
															href={`${problem.exercise}`}
															className="font-bold hover:text-[#28d3a0]"
															target="_blank"
														>
															{problem.name}
														</a>
													</td>
													<td
														className={`border border-gray-700 p-2 ${problem.difficulty === "Easy"
																? "text-green-400"
																: problem.difficulty === "Medium"
																	? "text-yellow-400"
																	: "text-red-400"
															}`}
													>
														{problem.difficulty}
													</td>
													<td className="border border-gray-700 p-2 text-center flex justify-center items-center">
														<a
															href={problem.solution}
															target="_blank"
															rel="noopener noreferrer"
															className="justify-center"
														>
															<CameraIcon />
														</a>
													</td>
												</tr>
											)
										)}
									</tbody>
								</table>
							) : (
								<div className="text-gray-400">No exercises available.</div>
							)}
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Roadmap;

