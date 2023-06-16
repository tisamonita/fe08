import { createSlice } from "@reduxjs/toolkit";

const todosInitialState = {
  currentId: 0,
  todos: [
    {
        id : 1,
        title : "todos",
        description :"desc",
        deadline : "",
        status : true,
    },
    {
        id: 2,
        title: "Belajar React",
        description: "Belajar React dengan baik",
        deadline: "2021-10-10",
        status: "todo",
      },
      {
        id: 3,
        title: "Belajar Redux",
        description: "Belajar Redux dengan baik",
        deadline: "2021-10-10",
        status: "inprogress",
      },
      {
        id: 4,
        title: "Belajar React-Redux",
        description: "Belajar React-Redux dengan baik",
        deadline: "2021-10-10",
        status: "done",
      },
  ],
  loading: false,
  errorMes: null,
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
    setLoading: (state, action) => {
        state.loading = action.payload
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
  extraReducers:{
    
  }
});

export const { addTodo, updateTodo, deleteTodo, setLoading } = todoSlice.actions;

export default todoSlice.reducer;