"use client";
import React, { useState } from "react";
import AddButton from "./addbutton";
import Image from "next/image";
import PopupForm from "./popupform";
import { StudentData } from "./types";

interface HeaderProps{
  addStudent: (student: StudentData) => void;
}
const Header: React.FC<HeaderProps> = ({ addStudent }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleFormSubmit = (formData: StudentData) => {
    addStudent(formData);
  };

  return (
    <header className="bg-stone-200 p-4">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-4 space-y-4 lg:space-y-0">
        <div className="flex flex-col space-y-8 w-full lg:w-auto">
          <div className="flex space-x-4">
            <div onClick={toggleFormVisibility}>
              <AddButton />
            </div>
            <button className="flex items-center justify-center px-2 py-2 font-bold text-black bg-add-button rounded-md hover:bg-gradient-to-br hover:from-[#caa98d] hover:to-[#90b6ae]">
              <span className="text-plus-icon m-1">
                <Image
                  src="/group 66 (2).svg"
                  alt="Money Icon"
                  width={20}
                  height={20}
                />
              </span>
              Money Receipt
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <span>Show</span>
            <div className="relative">
              <select className="appearance-none bg-gray-200 border border-gray-300 rounded pl-2 pr-8 py-1 text-center">
                <option value="10">10</option>
                <option value="11" selected>
                  11
                </option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-gray-700">
                <Image src="/arrow.svg" alt="Arrow" height={28} width={28}/>
              </div>
            </div>
            <span>Entries</span>
          </div>
        </div>

        <h1 className="text-xl font-bold text-center flex-grow">
          Selected Students List
        </h1>

        <div className="flex items-center space-x-4">
          <div className="relative w-10 h-10">
            <img
              src="/Notification.svg"
              alt="Notification"
              className="w-full h-full"
            />
            <div className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></div>
          </div>
          <div className="relative w-10 h-10 rounded-lg p-1">
            <img src="/Setting.svg" alt="Settings" className="w-full h-full" />
          </div>
          <div className="relative w-10 h-10">
            <img src="/menu.svg" alt="Menu" className="w-full h-full" />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="w-full max-w-sm">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-cyan-600 sr-only"
          >
            Search
          </label>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-4 h-4 text-cyan-600"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 outline-none"
              placeholder="Search"
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-cyan-500 hover:bg-cyan-600 focus:ring-2 font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {isFormVisible && (
        <PopupForm onSubmit={handleFormSubmit} onClose={toggleFormVisibility} />
      )}
    </header>
  );
};

export default Header;
