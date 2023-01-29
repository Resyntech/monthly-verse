import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Bible } from "../../_interface"

const initialState: Bible = {
  data: [{}],
  showVerse: "",
}

export const bibleSlice = createSlice({
  name: "bible",
  initialState,
  reducers: {
    setBible: (state, action: PayloadAction<Bible>) => {
      let array: any = []
      action.payload.data.map(({ language }, i: number) => {
        if (language?.name?.toUpperCase() === "ENGLISH")
          array.push(action.payload.data[i])
      })
      state.data = array
    },
    setVerse: (state, action: PayloadAction<string>) => {
      state.showVerse = action.payload
    },
  },
})

export const { setBible, setVerse } = bibleSlice.actions

export default bibleSlice.reducer
