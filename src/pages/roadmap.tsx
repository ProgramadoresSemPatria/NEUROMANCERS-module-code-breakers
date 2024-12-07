import React from "react";
import { ReactFlowProvider } from "@xyflow/react";
import Header from "../components/header.tsx";
import Roadmap from "../components/Roadmap/Roadmap";

const RoadmapPage: React.FC = () => {
  return (
    <>
      <Header />
      <ReactFlowProvider>
        <Roadmap />
      </ReactFlowProvider>
    </>
  );
};

export default RoadmapPage;

