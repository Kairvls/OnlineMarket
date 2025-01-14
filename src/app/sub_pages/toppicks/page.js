"use client";
import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-600 rounded-lg w-11/12 max-w-md p-6 shadow-lg">
        <div className="flex justify-between items-center border-b pb-3">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 focus:outline-none text-2xl"
          >
            &times;
          </button>
        </div>
        <div className="mt-4">{children}</div>
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
