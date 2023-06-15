// import function configureStore dari Redux Toolkit
const { configureStore } = require("@reduxjs/toolkit");

// import reducer dan action creators dari counterSlice.js
const { reducer, increment, decrement, reset } = require("./counterSlice.js");

// buat store dengan memanggil function configureStore
const store = configureStore({
    // properti reducer akan menerima object yang berisi nama state dan reducer function
    reducer: {
      counter: reducer,
    },
  });

  function listener(state) {
    console.log(state);
  }
  
  // mengirimkan action increment ke store, nilai dari state counter akan bertambah 1
store.dispatch(increment());

// mengirimkan action decrement ke store, nilai dari state counter akan berkurang 1
store.dispatch(decrement());

// mengirimkan action reset ke store, nilai dari state counter akan kembali ke nilai awal yaitu 0
store.dispatch(reset());
  
  // export store agar dapat digunakan di file lain
  module.exports = store;