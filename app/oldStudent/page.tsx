// OldStudent.tsx
"use client";
import React, { useState, useEffect } from "react";
import Header from "../student/header";
import Table from "../student/table";
import { StudentData } from "../student/types";
import Sidebar from "../student/sidebar";

const OldStudent: React.FC = () => {
  const [students, setStudents] = useState<StudentData[]>([]);
  const [editStudent, setEditStudent] = useState<StudentData | null>(null);
  const newStudentThreshold = 30; // Define threshold for new students in days

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

  const isOldStudent = (date: string) => {
    const studentDate = new Date(date);
    const currentDate = new Date();
    const differenceInTime = currentDate.getTime() - studentDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return differenceInDays > newStudentThreshold;
  };

  const oldStudents = students.filter((student) => isOldStudent(student.date));

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
          students={oldStudents}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default OldStudent;
