import { Handle, Position } from "@xyflow/react";

interface CustomNodeProps {
  data: {
    id: string;
    label: string;
    type: "source" | "target" | "both";
    prerequisites: string[];
  };
  setSelectedNode: (node: any) => void;
  setIsModalOpen: (isOpen: boolean) => void;
}

const handleStyle = {
  background: "#ffffff",
  borderRadius: "50%",
  width: "6px",
  height: "6px",
  boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
};

export const CustomNode: React.FC<CustomNodeProps> = ({ data }) => {
  return (
    <>
      <div className="rounded w-40 h-12 flex justify-center items-center text-center text-white bg-[#28d3a0] shadow-md hover:bg-[#4814b0] transition-shadow">
        <p className="font-bold">{data.label}</p>
        {(data.type === "target" || data.type === "both") && (
          <Handle type="target" position={Position.Top} style={handleStyle} />
        )}
        {(data.type === "source" || data.type === "both") && (
          <Handle
            type="source"
            position={Position.Bottom}
            style={handleStyle}
          />
        )}
      </div>
    </>
  );
};

export default CustomNode;
