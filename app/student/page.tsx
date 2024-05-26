 "use client";
import React, { useState } from "react";
import Header from "./header";
import Table from "./table";
import { StudentData } from "./types"; 
import Sidebar from "./sidebar";

const AdmissionStudentList: React.FC = () => {
  const [students, setStudents] = useState<StudentData[]>([]);

  const addStudent = (student: StudentData) => {
    setStudents((prevStudents) => [...prevStudents, student]);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header addStudent={addStudent} />
        <Table students={students} />
      </div>
    </div>
  );
};

export default AdmissionStudentList;

