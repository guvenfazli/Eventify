"use client"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "./store"
import { Provider } from "react-redux"

export const StoreProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}