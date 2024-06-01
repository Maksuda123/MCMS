import React from "react";
import { FaMale, FaFemale, FaEdit, FaTrash } from 'react-icons/fa';
import { StudentData } from "./types";

interface TableProps {
  students: StudentData[];
  onEdit: (student: StudentData) => void;
  onDelete: (slNo: string) => void;
}

const Table: React.FC<TableProps> = ({ students, onEdit, onDelete }) => {
  if (!students || students.length === 0) {
    return (
      <div className="overflow-x-auto">
        <h1 className="text-xl font-bold text-center flex-grow">
          Selected Students List
        </h1>
        <table className="min-w-full table-auto">
          <thead className="bg-zinc-300">
            <tr>
              <th className="px-4 py-2">Sl.No</th>
              <th className="px-4 py-2">Roll No</th>
              <th className="px-4 py-2">Name of the Students</th>
              <th className="px-4 py-2">Gender</th>
              <th className="px-4 py-2">Merit</th>
              <th className="px-4 py-2">Quota</th>
              <th className="px-4 py-2">Test</th>
              <th className="px-4 py-2">M. Score</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
        </table>
        <div>No data available</div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead className="bg-zinc-300">
          <tr>
            <th className="px-4 py-2">Sl.No</th>
            <th className="px-4 py-2">Roll No</th>
            <th className="px-4 py-2">Name of the Students</th>
            <th className="px-4 py-2">Gender</th>
            <th className="px-4 py-2">Merit</th>
            <th className="px-4 py-2">Quota</th>
            <th className="px-4 py-2">Test</th>
            <th className="px-4 py-2">M. Score</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.slNo}>
              <td className="border px-4 py-2">{student.slNo}</td>
              <td className="border px-4 py-2">{student.rollNo}</td>
              <td className="border px-4 py-2">{student.name}</td>
              <td className="border px-4 py-2">
                {student.sex === "Male" ? <FaMale className="text-blue-500" /> : student.sex === "Female" ? <FaFemale className="text-pink-500" /> : student.sex}
              </td>
              <td className="border px-4 py-2">{student.merit}</td>
              <td className="border px-4 py-2">{student.quota}</td>
              <td className="border px-4 py-2">{student.test}</td>
              <td className="border px-4 py-2">{student.mScore}</td>
              <td className="border px-4 py-2">{student.status}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => onEdit(student)}
                  className="text-blue-500 hover:text-blue-700 mr-2"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => onDelete(student.slNo)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
