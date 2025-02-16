import { createSlice } from "@reduxjs/toolkit";

const restCountriesSlice = createSlice({
  name: 'Rest Countries',
  initialState: { countryList: undefined },
  reducers: {
    getCountries(state, action) {
      state.countryList = action.payload
    },
    removeCountries(state) {
      state.countryList = undefined
    }
  }
})

export default restCountriesSlice
export const restCountriesAction = restCountriesSlice.actions