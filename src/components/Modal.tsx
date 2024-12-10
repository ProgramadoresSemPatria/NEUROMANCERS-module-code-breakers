import React from "react";
import { roadmapNodes } from "./Roadmap/Nodes";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#202225] p-5 rounded-lg shadow-lg w-3/5 z-51 justify-center items-center text-center text-white ">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="top-2 right-3 text-1xl font-bold px-3 py-1 text-white rounded-full bg-[#28d3a0] hover:bg-[#4814b0] align"
          >
            X
          </button>
        </div>
        {content}
      </div>
    </div>
  );
};

export default Modal;
