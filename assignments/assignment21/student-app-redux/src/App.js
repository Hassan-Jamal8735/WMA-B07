import React from 'react';
import StudentForm from './components/studentForm/StudentForm';
import StudentList from './components/studentList/StudentList';

export default function App() {
  return (
    <div>
      <h1 className="text-center text-primary mb-4">Student Management App</h1>

      <StudentForm />
      <StudentList />
    </div>
  );
}
