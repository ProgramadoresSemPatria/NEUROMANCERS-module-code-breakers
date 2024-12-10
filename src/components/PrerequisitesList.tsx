import React from "react";

interface PrerequisitesListProps {
  prerequisites: string[] | undefined;
}
export const isPrerequisitesArray = (
  prerequisites: unknown
): prerequisites is string[] => {
  return (
    Array.isArray(prerequisites) &&
    prerequisites.every((item) => typeof item === "string")
  );
};

const PrerequisitesList: React.FC<PrerequisitesListProps> = ({
  prerequisites,
}) => {
  return (
    <div className="my-5">
      <h3 className="text-xl font-semibold mb-4">Prerequisites:</h3>
      {prerequisites && prerequisites.length > 0 ? (
        <div className="flex flex-wrap gap-2 justify-center">
          {prerequisites.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 text-white p-4 rounded-lg shadow-md hover:bg-gray-700 transition-all"
              style={{ minWidth: "120px", textAlign: "center" }}
            >
              {item}
            </div>
          ))}
        </div>
      ) : (
        <p>No prerequisites available</p>
      )}
    </div>
  );
};

export default PrerequisitesList;
