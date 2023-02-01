import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  { id: "0", name: "Chai" },
  { id: "1", name: "Papermint" },
  { id: "2", name: "808" },
]

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
})

export const selectAllUsers = (state) => state.users // Selector function

export default usersSlice.reducer
