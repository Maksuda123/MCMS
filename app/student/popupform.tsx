import React, { useState, useEffect } from "react";
import { StudentData } from "./types";

interface PopupFormProps {
  onSubmit: (formData: StudentData) => void;
  onClose: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState<StudentData>({
    slNo: 0,
    rollNo: "",
    name: "",
    sex: "",
    merit: 0,
    quota: "",
    test: 0,
    mScore: 0,
    status: "",
  });

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "slNo" ||
        name === "merit" ||
        name === "test" ||
        name === "mScore"
          ? Number(value)
          : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  const handleReset = () => {
    setFormData({
      slNo: 0,
      rollNo: "",
      name: "",
      sex: "",
      merit: 0,
      quota: "",
      test: 0,
      mScore: 0,
      status: "",
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-4/5 max-w-3xl">
        <div className="flex justify-between items-center p-2 mb-6 bg-stone-200">
          <h2 className="text-2xl font-bold">Selected Student(add)</h2>
          <p className="text-sm">{currentDateTime}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">
                Sl.No:
              </label>
              <input
                type="number"
                name="slNo"
                value={formData.slNo}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">
                Roll No:
              </label>
              <input
              id="roll"
                type="text"
                name="rollNo"
                placeholder="Roll No"
                value={formData.rollNo}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">
                Full Name:
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">
                Sex:
              </label>
              <div className="flex space-x-4 mt-1">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="sex"
                    value="Male"
                    checked={formData.sex === "Male"}
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
                    checked={formData.sex === "Female"}
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
                    checked={formData.sex === "Others"}
                    onChange={handleChange}
                    className="form-radio"
                  />
                  <span className="ml-2">Others</span>
                </label>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">
                Merit:
              </label>
              <input
                type="number"
                name="merit"
                value={formData.merit}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">
                Test:
              </label>
              <input
                type="number"
                name="test"
                value={formData.test}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">
                M. Score:
              </label>
              <input
                type="number"
                name="mScore"
                value={formData.mScore}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="block text-sm font-medium text-gray-700">
                Quota:
              </label>
              <select
                name="quota"
                value={formData.quota}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                required
              >
                <option value="">Select</option>
                <option value="General">General</option>
                <option value="Freedom Fighter">Freedom Fighter</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
