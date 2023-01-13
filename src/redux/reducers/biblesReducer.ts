import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Bibles } from "../../../pages/_interface"

const initialState: Bibles = {
  data: [{}],
  showVerse: "",
}

export const biblesSlice = createSlice({
  name: "bibles",
  initialState,
  reducers: {
    setBibles: (state, action: PayloadAction<Bibles>) => {
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

export const { setBibles, setVerse } = biblesSlice.actions

export default biblesSlice.reducer
