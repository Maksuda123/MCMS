"use client";
import React, { useState } from "react";
import Header from "./header"
import Table from "./table";
import { StudentData } from "./types";
import Sidebar from "./sidebar";

const Student: React.FC = () => {
  const [students, setStudents] = useState<StudentData[]>([]);
  const [editStudent, setEditStudent] = useState<StudentData | null>(null);

  const addStudent = (student: StudentData) => {
    if (editStudent) {
      setStudents((prevStudents) =>
        prevStudents.map((s) => (s.slNo === student.slNo ? student : s))
      );
      setEditStudent(null);
    } else {
      setStudents((prevStudents) => [...prevStudents, student]);
    }
  };

  const handleEdit = (student: StudentData) => {
    setEditStudent(student);
  };

  const handleDelete = (slNo: string) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.slNo !== slNo)
    );
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header
          addStudent={addStudent}
          editStudent={editStudent}
          isEditMode={!!editStudent}
        />
        <Table
          students={students}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Student;
