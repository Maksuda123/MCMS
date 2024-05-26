import React from "react";
import Image from "next/image";
import { StudentData } from "./types";

interface TableProps {
  students: StudentData[];
}

const Table: React.FC<TableProps> = ({ students }) => {
  if (!students || students.length === 0) {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-zinc-300">
            <tr>
              <th className="px-4 py-2">Sl.No</th>
              <th className="px-4 py-2">Roll No</th>
              <th className="px-4 py-2">Name of the Students</th>
              <th className="px-4 py-2">Sex</th>
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
            <th className="px-4 py-2">Sex</th>
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
              <td className="border px-4 py-2">{student.sex}</td>
              <td className="border px-4 py-2">{student.merit}</td>
              <td className="border px-4 py-2">{student.quota}</td>
              <td className="border px-4 py-2">{student.test}</td>
              <td className="border px-4 py-2">{student.mScore}</td>
              <td className="border px-4 py-2">{student.status}</td>
              <td className="border px-4 py-2">Action</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
