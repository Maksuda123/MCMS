"use client";
import React, { useState, useEffect } from "react";
import AddButton from "./addbutton";
import PopupForm from "./popupform";
import { StudentData } from "./types";

interface HeaderProps {
  addStudent: (student: StudentData) => void;
  editStudent: StudentData | null;
  isEditMode: boolean;
}

const Header: React.FC<HeaderProps> = ({
  addStudent,
  editStudent,
  isEditMode,
}) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState<StudentData>({
    slNo: "",
    rollNo: "",
    name: "",
    sex: "",
    merit: "",
    quota: "",
    test: "",
    mScore: "",
    status: "",
    date: "",
  });

  useEffect(() => {
    if (editStudent) {
      setFormData(editStudent);
      setIsFormVisible(true);
    }
  }, [editStudent]);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
    if (!isFormVisible) {
      setFormData({
        slNo: "",
        rollNo: "",
        name: "",
        sex: "",
        merit: "",
        quota: "",
        test: "",
        mScore: "",
        status: "",
        date: "",
      });
    }
  };

  const handleFormSubmit = (formData: StudentData) => {
    addStudent(formData);
    setIsFormVisible(false);
  };

  return (
    <div className="bg-stone-200 p-4">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-4 space-y-4 lg:space-y-0">
        <div className="flex flex-col space-y-8 w-full lg:w-auto">
          <div className="flex space-x-4">
            <div onClick={toggleFormVisibility}>
              <AddButton />
            </div>
          </div>
          {isFormVisible && (
            <PopupForm
              onSubmit={handleFormSubmit}
              onClose={toggleFormVisibility}
              formData={formData}
              isEditMode={isEditMode}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
