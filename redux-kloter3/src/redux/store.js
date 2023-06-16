//daftar dari semua reduce yang dipakai

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

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