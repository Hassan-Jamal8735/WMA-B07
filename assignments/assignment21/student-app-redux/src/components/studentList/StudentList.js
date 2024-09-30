import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeStudent } from '../../store/studentSlice';

export default function StudentList() {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();

  return (
    <div className="container mt-4 bg-light p-4 rounded shadow">
      <h2 className="text-center mb-4">Student List</h2>
      <ul className="list-group">
        {students.map(student => (
          <li key={student.id} className="list-group-item d-flex justify-content-between align-items-center">
            {student.name}
            <button 
              className="btn btn-danger btn-sm"
              onClick={() => dispatch(removeStudent(student.id))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      {students.length === 0 && (
        <p className="text-center mt-4">No students found.</p>
      )}
    </div>
  );
}
