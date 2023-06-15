// import store
const store = require("./store.js");

// Mendapatkan elemen tombol dan elemen tampilan counter
const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");
const resetBtn = document.querySelector("#reset");
const countEl = document.querySelector("#count");

// Render tampilan counter
function render() {
    // gunakan method getState untuk mendapatkan nilai dari state counter
    countEl.textContent = store.getState().counter.count;
}


// Tambahkan event listener untuk tombol increment
incrementBtn.addEventListener("click", () => {
    // gunakan method dispatch untuk mengirimkan action increment ke store
    store.dispatch(increment());
  });
  
  // Tambahkan event listener untuk tombol decrement
  decrementBtn.addEventListener("click", () => {
    // gunakan method dispatch untuk mengirimkan action decrement ke store
    store.dispatch(decrement());
  });
  
  // Tambahkan event listener untuk tombol reset
  resetBtn.addEventListener("click", () => {
    // gunakan method dispatch untuk mengirimkan action reset ke store
    store.dispatch(reset());
  });

  // Render tampilan counter
function render() {
    countEl.textContent = store.getState().counter.count;
  }
  // subscribe function render ke store
store.subscribe(render);