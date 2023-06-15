const {createSlice} = require("@reduxjs/toolkit");

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value:0,
    },
    reducers: {
        increment: (state, action) => {
          state.value += 1;
        },
        decrement: (state, action) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        }
      },
});

const {reducer, actions} = counterSlice;
const {increment, decrement, reset} = actions;

module.exports = { reducer, increment, decrement, reset };