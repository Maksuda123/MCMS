"use client";
import React, { useState, useEffect } from "react";
import Header from "./header";
import Table from "./table";
import { StudentData } from "./types";
import Sidebar from "./sidebar";

const Student: React.FC = () => {
  const [students, setStudents] = useState<StudentData[]>([]);
  const [editStudent, setEditStudent] = useState<StudentData | null>(null);

  useEffect(() => {
    const storedStudents = localStorage.getItem("students");
    if (storedStudents) {
      setStudents(JSON.parse(storedStudents));
    }
  }, []);

  const addStudent = (student: StudentData) => {
    let updatedStudents;
    if (editStudent) {
      updatedStudents = students.map((s) =>
        s.slNo === student.slNo ? student : s
      );
      setEditStudent(null);
    } else {
      updatedStudents = [...students, student];
    }
    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
  };

  const handleEdit = (student: StudentData) => {
    setEditStudent(student);
  };

  const handleDelete = (slNo: string) => {
    const updatedStudents = students.filter((student) => student.slNo !== slNo);
    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
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
