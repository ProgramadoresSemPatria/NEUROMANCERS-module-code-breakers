import React from "react";
import { ReactFlowProvider } from "@xyflow/react";
import Header from "../components/Header.tsx";
import Roadmap from "../components/Roadmap/Roadmap";
import ProgressIndicator from "../components/Progress/ProgressIndicator.tsx";
const RoadmapPage: React.FC = () => {
  return (
    <>
      <Header />
      <ReactFlowProvider>
        <Roadmap />
      </ReactFlowProvider>
      <ProgressIndicator />
    </>
  );
};

export default RoadmapPage;
