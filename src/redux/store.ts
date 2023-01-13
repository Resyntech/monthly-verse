import { configureStore } from "@reduxjs/toolkit"
import { biblesReducer, uiReducer } from "./reducers"

const store = configureStore({
  reducer: {
    bibles: biblesReducer,
    ui: uiReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
