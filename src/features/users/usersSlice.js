import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const USERS_URL = "https://jsonplaceholder.typicode.com/users"

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const res = await axios.get(USERS_URL)
    return res.data
  } catch (error) {
    return error.message
  }
})

const initialState = []

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload // Completly rewrites initialState
    })
  },
})

export const selectAllUsers = (state) => state.users // Selector function

export const selectUserById = (state, userId) =>
  state.users.find((user) => user.id === userId)

export default usersSlice.reducer
