import { createSlice } from "@reduxjs/toolkit";

const multiStepFormSlice = createSlice({
  name: "multiStepFormSlice",
  initialState: {
    title: null,
    category: null,
    startDate: null,
    endDate: null,
    startTime: null,
    endTime: null,
    location: null,
    description: null,
    eventType: null,
    ticketQuantity: null,
    ticketPrice: null,
    image: null,
    imageURL: null
  },
  reducers: {
    fillTheForm(state, action) {
      return { ...state, ...action.payload }
    },
    emptyTheForm(state) {
      return state = {
        title: null,
        category: null,
        startDate: null,
        endDate: null,
        startTime: null,
        endTime: null,
        location: null,
        description: null,
        eventType: null,
        ticketQuantity: null,
        ticketPrice: null,
        image: null,
        imageURL: null
      }
    }
  }
})

export default multiStepFormSlice
export const multiStepFormAction = multiStepFormSlice.actions