// import configureStore from redux toolkit
import { configureStore } from "@reduxjs/toolkit";

// import todoReducer
import todoReducer from './slice/TodoSlice';

// create store
const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware: [...getDefaultMiddleware()],
});

//export store
export default store;