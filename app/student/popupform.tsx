import React, { useState, useEffect } from "react";
import { StudentData } from "./types";

interface PopupFormProps {
  onSubmit: (formData: StudentData) => void;
  onClose: () => void;
  formData: StudentData;
  isEditMode: boolean;
}

const PopupForm: React.FC<PopupFormProps> = ({
  onSubmit,
  onClose,
  formData,
  isEditMode,
}) => {
  const [formState, setFormState] = useState<StudentData>(formData);
  const [currentDateTime, setCurrentDateTime] = useState<string>("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentDateTime(now.toLocaleString());
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setFormState(formData);
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formState);
  };

  const handleReset = () => {
    setFormState({
      slNo: "",
      rollNo: "",
      name: "",
      sex: "",
      merit: "",
      quota: "",
      test: "",
      mScore: "",
      status: "",
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-4/5 max-w-3xl">
        <div className="flex justify-between items-center p-2 mb-6 bg-stone-200">
          <h2 className="text-xl font-bold mb-4">
            {isEditMode ? "Update Student" : "Add Student"}
          </h2>
          <p className="text-sm">{currentDateTime}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">
                Sl.No: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="slNo"
                value={formState.slNo}
                placeholder="Sl No"
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm appearance-none"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">
                Roll No: <span className="text-red-500">*</span>
              </label>
              <input
                id="roll"
                type="text"
                name="rollNo"
                placeholder="Roll No"
                value={formState.rollNo}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm appearance-none"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">
                Full Name: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formState.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm appearance-none"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">
                Gender:
              </label>
              <div className="flex space-x-4 mt-1">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="sex"
                    value="Male"
                    checked={formState.sex === "Male"}
                    onChange={handleChange}
                    className="form-radio"
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="sex"
                    value="Female"
                    checked={formState.sex === "Female"}
                    onChange={handleChange}
                    className="form-radio"
                  />
                  <span className="ml-2">Female</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="sex"
                    value="Others"
                    checked={formState.sex === "Others"}
                    onChange={handleChange}
                    className="form-radio"
                  />
                  <span className="ml-2">Others</span>
                </label>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">
                Merit: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="merit"
                value={formState.merit}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm appearance-none"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">
                Test:
              </label>
              <input
                type="text"
                name="test"
                value={formState.test}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm appearance-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">
                M. Score:
              </label>
              <input
                type="text"
                name="mScore"
                value={formState.mScore}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm appearance-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">
                Quota:
              </label>
              <select
                name="quota"
                value={formState.quota}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              >
                <option value="">Select</option>
                <option value="General">General</option>
                <option value="Freedom Fighter">Freedom Fighter</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">
                Status: <span className="text-red-500">*</span>
              </label>
              <select
                name="status"
                value={formState.status}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm required"
              >
                <option value="">Select</option>
                <option value="Enrolled">Enrolled</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Close
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              {isEditMode ? "Update Student" : "Add Student"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
