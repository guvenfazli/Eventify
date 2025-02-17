import { createSlice } from "@reduxjs/toolkit";

const multiStepFormSlice = createSlice({
  name: "multiStepFormSlice",
  initialState: {
    title: undefined,
    category: undefined,
    startDate: undefined,
    endDate: undefined,
    startTime: undefined,
    endTime: undefined,
    location: undefined,
    description: undefined,
    eventType: undefined,
    ticketQuantity: undefined,
    ticketPrice: undefined,
    image: undefined,
    imageURL: undefined
  },
  reducers: {
    fillTheForm(state, action) {
      return { ...state, ...action.payload }
    },
    emptyTheForm(state) {
      return state = {
        title: undefined,
        category: undefined,
        startDate: undefined,
        endDate: undefined,
        startTime: undefined,
        endTime: undefined,
        location: undefined,
        description: undefined,
        eventType: undefined,
        ticketQuantity: undefined,
        ticketPrice: undefined,
        image: undefined,
        imageURL: undefined
      }
    }
  }
})

export default multiStepFormSlice
export const multiStepFormAction = multiStepFormSlice.actions