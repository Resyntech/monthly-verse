import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
  title: [""],
  currentRow: [""],
}

interface cardTypes {
  index: number
  content: string
}

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<cardTypes>) => {
      let title = [...state.title]
      title[action.payload.index] = action.payload.content
      state.title = title
    },
    setCurrentRow: (state, action: PayloadAction<cardTypes>) => {
      let currentRow = [...state.currentRow]
      currentRow[action.payload.index] = action.payload.content
      state.currentRow = currentRow
    },
  },
})

export const { setTitle, setCurrentRow } = cardSlice.actions

export default cardSlice.reducer
