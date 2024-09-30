import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../../store/studentSlice';

export default function StudentForm() {
  const [studentName, setStudentName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentName.trim()) {
      dispatch(addStudent({ id: Date.now(), name: studentName }));
      setStudentName(''); // Clear the input field after submission
    }
  };

  return (
    <div className="container mt-4 bg-light p-4 rounded shadow">
      <h2 className="text-center mb-4">Add Student</h2>
      <form onSubmit={handleSubmit} className="d-flex flex-column">
        <div className="mb-3">
          <label htmlFor="studentName" className="form-label">Student Name</label>
          <input
            type="text"
            id="studentName"
            className="form-control"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Enter student name"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Student
        </button>
      </form>
    </div>
  );
}
