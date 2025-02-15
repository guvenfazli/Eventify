import { createSlice } from "@reduxjs/toolkit";

const multiStepFormSlice = createSlice({
  name: "multiStepFormSlice",
  initialState: {
    title: "",
    category: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    location: "",
    description: "",
    eventType: "",
    ticketQuantity: "",
    ticketPrice: ""
  },
  reducers: {
    fillTheForm(state, action) {
      return { ...state, ...action.payload }
    }
  }
})

export default multiStepFormSlice
export const multiStepFormAction = multiStepFormSlice.actions