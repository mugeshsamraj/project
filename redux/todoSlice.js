import { createSlice } from '@reduxjs/toolkit';

// Initial state with an empty list
const initialState = {
  list: [],
};

// Create Redux slice
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.list.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Export actions
export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;

// Export reducer
export default todoSlice.reducer;
