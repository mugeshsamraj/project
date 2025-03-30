import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

// Create the store with our to-do reducer
export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});