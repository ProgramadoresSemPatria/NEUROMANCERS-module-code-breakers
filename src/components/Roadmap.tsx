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
  { id: "3", position: { x: 100, y: 100 }, data: { label: "Stack" } },
  { id: "4", position: { x: -200, y: 200 }, data: { label: "Binary Search" } },
  { id: "5", position: { x: 0, y: 200 }, data: { label: "Sliding Window" } },
  { id: "6", position: { x: 200, y: 200 }, data: { label: "Linked List" } },
  { id: "7", position: { x: -100, y: 300 }, data: { label: "Trees" } },
  { id: "8", position: { x: -200, y: 400 }, data: { label: "Tries" } },
  { id: "9", position: { x: 200, y: 400 }, data: { label: "Backtracking" } },
  {
    id: "10",
    position: { x: -300, y: 500 },
    data: { label: "Heap / Priority Queue" },
  },
  { id: "11", position: { x: 100, y: 500 }, data: { label: "Graphs" } },
  { id: "12", position: { x: 450, y: 500 }, data: { label: "1-D DP" } },
  { id: "13", position: { x: -400, y: 600 }, data: { label: "Intervals" } },
  { id: "14", position: { x: -200, y: 600 }, data: { label: "Greedy" } },
  {
    id: "15",
    position: { x: 0, y: 600 },
    data: { label: "Advanced Graphs" },
  },
  { id: "16", position: { x: 300, y: 600 }, data: { label: "2-D DP" } },
  {
    id: "17",
    position: { x: 500, y: 600 },
    data: { label: "Bit Manipulation" },
  },
  {
    id: "18",
    position: { x: 200, y: 700 },
    data: { label: "Math & Geometry" },
  },
];

const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e2-4", source: "2", target: "4" },
  { id: "e2-5", source: "2", target: "5" },
  { id: "e2-6", source: "2", target: "6" },
  { id: "e4-7", source: "4", target: "7" },
  { id: "e6-7", source: "6", target: "7" },
  { id: "e7-8", source: "7", target: "8" },
  { id: "e7-9", source: "7", target: "9" },
  { id: "e8-10", source: "8", target: "10" },
  { id: "e9-11", source: "9", target: "11" },
  { id: "e10-13", source: "10", target: "13" },
  { id: "e10-14", source: "10", target: "14" },
  { id: "e10-15", source: "10", target: "15" },
  { id: "e11-15", source: "11", target: "15" },
  { id: "e11-16", source: "11", target: "16" },
  { id: "e12-16", source: "12", target: "16" },
  { id: "e12-17", source: "12", target: "17" },
  { id: "e11-18", source: "11", target: "18" },
];

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
