// import configureStore from redux toolkit
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// import todoReducer
import todoReducer from "./slices/todoSlice";
import userReducer from './slices/userSlice';

// create store
const store = configureStore({
  reducer: {
    todos: todoReducer,
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

//export store
export default store;