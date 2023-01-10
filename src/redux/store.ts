import { configureStore } from "@reduxjs/toolkit"
import { cardReducer, dateReducer, uiReducer } from "./reducers"

const store = configureStore({
  reducer: {
    card: cardReducer,
    date: dateReducer,
    ui: uiReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
