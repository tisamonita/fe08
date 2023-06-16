import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const fetchTodo = createAsyncThunk("todos/list", async () =>{
    const url ='http://';
    const data = await fetch(url)
});

const todosInitialState = {
  currentId: 0,
  todos: [
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
  loading: false,
  errorMsg: null,
};

//payload adalah parameter yg dikirimkan dari view ketika memanggil action

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
      handleLoading: (state, action) => {
        state.loading = action.payload.load;
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
    [fetchTodo.fullfilled]: (state, action)=>{
        state.todos.push(action.payload)
    }
  }
});

export const { addTodo, updateTodo, deleteTodo, handleLoading } = todoSlice.actions;
export {fetchTodo}

export default todoSlice.reducer;