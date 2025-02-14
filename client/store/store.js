import { configureStore, combineReducers } from "@reduxjs/toolkit"
import {
  persistStore, persistReducer,
  FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER
} from 'redux-persist';
import storage from "redux-persist/lib/storage"
import authSlice from "./slices/authSlice"
import restCountriesSlice from "./slices/restCountriesSlice"
const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = persistReducer(persistConfig, combineReducers({
  userInfo: authSlice.reducer,
  countrySlice: restCountriesSlice.reducer
}))

export const store = configureStore({
  reducer: { rootReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

})

export const persistor = persistStore(store)