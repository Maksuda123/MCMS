import React from "react";

const AddButton = () => {
  return (
    <button className="flex items-center justify-center px-2 py-2 font-bold text-black bg-add-button rounded-md hover:bg-gradient-to-br hover:from-[#caa98d] hover:to-[#90b6ae]">
      <span className="flex items-center justify-center w-6 h-6 mr-2 border-2 border-plus-icon rounded-full">
        <span className="text-plus-icon">+</span>
      </span>
      Add
    </button>
  );
};

export default AddButton;
