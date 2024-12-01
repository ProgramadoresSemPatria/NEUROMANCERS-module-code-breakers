import { Handle, Position } from "@xyflow/react";

interface CustomNodeProps {
  data: {
    label: string;
    type: "source" | "target" | "both";
  };
}

const CustomNode: React.FC = ({ data }) => {
  return (
    <>
      <div className="rounded w-40 h-12 flex justify-center items-center text-center text-white bg-[#28d3a0] shadow-md hover:bg[#4814b0] transition-shadow">
        <p className="font-bold">{data.label}</p>
        {(data.type === "target" || data.type === "both") && (
          <Handle
            type="target"
            position={Position.Top}
            style={{ background: "#ff3860" }}
          />
        )}
        {data.type === "source" ||
          (data.type === "both" && (
            <Handle
              type="source"
              position={Position.Bottom}
              style={{ background: "#ff3860" }}
            />
          ))}
      </div>
    </>
  );
};

export default CustomNode;
