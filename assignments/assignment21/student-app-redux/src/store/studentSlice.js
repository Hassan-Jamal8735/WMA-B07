// src/store/studentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'students',
  initialState: [],
  reducers: {
    addStudent: (state, action) => {
      state.push(action.payload); // Add student logic
    },
    removeStudent: (state, action) => {
      return state.filter(student => student.id !== action.payload); // Remove student logic
    },
  },
});

// Export the actions
export const { addStudent, removeStudent } = studentSlice.actions;

// Export the reducer
export default studentSlice.reducer;
