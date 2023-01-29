import { configureStore } from "@reduxjs/toolkit"
import { bibleReducer, dateReducer, uiReducer } from "./reducers"

const store = configureStore({
  reducer: {
    bible: bibleReducer,
    date: dateReducer,
    ui: uiReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
