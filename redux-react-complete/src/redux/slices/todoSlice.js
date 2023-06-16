import { createSlice } from "@reduxjs/toolkit";

const todosInitialState = {
  currentId: 0,
  todos: [
     // add default todos
     {
        id: 1,
        title: "Belajar React",
        description: "Belajar React dengan baik",
        deadline: "2021-10-10",
        status: "todo",
      },
      {
        id: 2,
        title: "Belajar Redux",
        description: "Belajar Redux dengan baik",
        deadline: "2021-10-10",
        status: "inprogress",
      },
      {
        id: 3,
        title: "Belajar React-Redux",
        description: "Belajar React-Redux dengan baik",
        deadline: "2021-10-10",
        status: "done",
      },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState: todosInitialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: state.currentId + 1,
        title: action.payload.title,
        description: action.payload.description,
        deadline: action.payload.deadline,
        status: action.payload.status,
      });
    },
    updateTodo: (state, action) => {
      const { id, title, description, deadline, status } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        if (title) {
          todo.title = title;
        }
        if (description) {
          todo.description = description;
        }
        if (deadline) {
          todo.deadline = deadline;
        }
        if (status) {
          todo.status = status;
        }
      }
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      const index = state.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;