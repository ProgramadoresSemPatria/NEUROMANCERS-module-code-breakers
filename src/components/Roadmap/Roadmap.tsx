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
    setSelectedNode(node); // Store node data
    setIsModalOpen(true); // Open the modal
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
        onNodeClick={onNodeClick} // Trigger when a node is clicked
      />

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        content={
          <div>
            <h2 className="text-xl font-bold mb-2">Node Details</h2>
            {selectedNode && (
              <div>
                <p>
                  <strong>Node ID:</strong> {selectedNode.id}
                </p>
                <p>
                  <strong>Node Type:</strong> {selectedNode.type}
                </p>
                <p>
                  <strong>Node Data:</strong>{" "}
                  {JSON.stringify(selectedNode.data)}
                </p>
              </div>
            )}
          </div>
        }
      />
    </div>
  );
};

export default Roadmap;
