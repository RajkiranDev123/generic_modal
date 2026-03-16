// Modal.tsx
import React from "react";

type ModalProps = {
  isOpen: boolean;
  title: string;
  content: React.ReactNode;
  onClose: (result?: string) => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, title, content, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="mb-6">{content}</div>
        <div className="flex justify-end gap-4">
          <button
            onClick={() => onClose("cancel")}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Cancel
          </button>
          <button
            onClick={() => onClose("confirm")}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
