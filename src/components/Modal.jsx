// Modal.js (updated)
import { useEffect } from "react";

const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-10" onClick={onClose}>
      <div
        className="absolute bg-white opacity-90 p-4 rounded-lg shadow-lg flex flex-col w-[250px] mx-auto"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-center">
          Scan the QRcode below to buy me a coffee ☺️
        </p>
        <img src="/qrcode.png" alt="ewallet-qrcode" />
        <div className="flex items-right justify-end mt-3">
          <button
            onClick={onClose}
            className="bg-fuchsia-200 px-2 py-1 rounded-md hover:bg-fuchsia-300 shadow-gray-300 shadow-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
