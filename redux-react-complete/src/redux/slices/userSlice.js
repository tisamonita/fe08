
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
});

const userInitialState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState: userInitialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
  },
});

export { fetchUsers };

export default userSlice.reducer;