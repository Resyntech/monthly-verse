import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface DateState {
  month?: number
  year?: number
  firstDayOfWeek?: number
  maxDayOfWeek?: number
}

// Define the initial state using that type
const initialState: DateState = {}

export const dateSlice = createSlice({
  name: "date",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setAllDate: (state, action: PayloadAction<DateState>) => {
      state.month = action.payload.month
      state.year = action.payload.year
      state.firstDayOfWeek = action.payload.firstDayOfWeek
      state.maxDayOfWeek = action.payload.maxDayOfWeek
    },
    setMonth: (state, action: PayloadAction<DateState>) => {
      state.month = action.payload.month
    },
    setMonthAndYear: (state, action: PayloadAction<DateState>) => {
      state.month = action.payload.month
      state.year = action.payload.year
    },
  },
})

export const { setAllDate, setMonth, setMonthAndYear } = dateSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.date

// export const incrementAsync = (amount: number) => (dispatch: AppDispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }

export default dateSlice.reducer
