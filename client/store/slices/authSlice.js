import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"


const authSlice = createSlice({
  name: 'userSession',
  initialState: { isLogged: false, userInfo: null },
  reducers: {
    logIn(state, action) {
      state.isLogged = true,
        state.userInfo = action.payload
    },
    logOut(state) {
      state.isLogged = false,
        state.userInfo = undefined,
        storage.removeItem('persist:root')
    }
  }
})

export default authSlice
export const authActions = authSlice.actions
