import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'userSession',
  initialState: { isLogged: false, userInfo: null },
  reducers: {
    logIn(state, action) {
      state.isLogged = true,
        state.userInfo = action.payload
    }
  }
})

export default authSlice