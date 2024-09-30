// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './studentSlice'; // Import studentSlice reducer

// Configure and export the store
const store = configureStore({
  reducer: {
    students: studentReducer, // Set up the reducer
  },
});

export default store; // Export the entire store
