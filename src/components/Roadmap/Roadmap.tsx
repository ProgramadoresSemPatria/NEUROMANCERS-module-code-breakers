import "@xyflow/react/dist/style.css";
import React, { useCallback, useState } from "react";
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

const roadmapStyle = {
  backgroundColor: "#202225",
};

const nodeTypes = { custom: CustomNode };

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

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        content={
          <>
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
              <h2 className="text-2xl font-bold mb-4">Exercises:</h2>
              <div className="rounded-md bg-zinc-900 h-96 flex justify-center items-center">
                Table placeholder
              </div>
            </div>
          </>
        }
      />
    </div>
  );
};

export default Roadmap;
