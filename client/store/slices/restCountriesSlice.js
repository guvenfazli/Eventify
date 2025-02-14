import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"


const restCountriesSlice = createSlice({
  name: 'Rest Countries',
  initialState: { countryList: undefined },
  reducers: {
    getCountries(state, action) {
      state.countryList = action.payload
    }
  }
})

export default restCountriesSlice
export const restCountriesAction = restCountriesSlice.actions