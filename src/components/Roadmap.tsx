import "@xyflow/react/dist/style.css";
import React, { useCallback } from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
} from "@xyflow/react";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "Arrays and Hashing" } },
  { id: "2", position: { x: -100, y: 100 }, data: { label: "Two Pointers" } },
];

const initialEdges: Edge[] = [{ id: "e1-2", source: "1", target: "2" }];

const proOptions = { hideAttribution: true };

const Roadmap: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  return (
    <>
      <div style={{ width: "100vw", height: "80vh" }}>
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          proOptions={proOptions}
          onConnect={onConnect}
        />
      </div>
    </>
  );
};

export default Roadmap;
