import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// Define the initial state using that type
const initialState = {
  isDarkMode: false,
}

export const uiSlice = createSlice({
  name: "ui",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload
      if (window !== undefined)
        window.localStorage.setItem(
          "isDarkMode",
          JSON.stringify(action.payload)
        )
    },
    getUI: (state) => {
      let darkmode = state.isDarkMode
      if (window !== undefined)
        darkmode = JSON.parse(
          window.localStorage.getItem("isDarkMode") || "false"
        )
      state.isDarkMode = darkmode
    },
  },
})

export const { setDarkMode, getUI } = uiSlice.actions

export default uiSlice.reducer
