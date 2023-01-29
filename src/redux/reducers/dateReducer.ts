import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { DateMapper, DateMap } from "../../_interface"
import bibleHelper from "../../bibleHelper.json"
import { getRandomInt } from "../../random"

const date = new Date()

interface DateTypes {
  month: number
  year: number
  dateArray?: DateMap
}

const initialState: DateTypes = {
  month: date.getMonth(),
  year: date.getFullYear(),
}

export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setMonthYear: (state, action: PayloadAction<string>) => {
      let month = state.month
      let year = state.year
      action.payload === "minus" ? (month -= 1) : (month += 1)
      if (month > 11) (month = 0), (year += 1)
      if (month < 0) (month = 11), (year -= 1)
      console.log({ month, year })
      state.month = month
      state.year = year
    },
    dateMapper: (state, action: PayloadAction<DateMapper>) => {
      let array: DateMap = [
        {
          currentDate: action.payload.currentDate,
          currentWeekday: action.payload.currentWeekday,
          verse: randomVerse(),
        },
      ]

      function randomVerse() {
        const BOOK =
          bibleHelper.data[getRandomInt(0, bibleHelper.data.length - 1)]
        const bookChapters = BOOK.chapters.length
        const chapterNumber = getRandomInt(0, bookChapters - 1)
        const chapterVerse = BOOK.chapters[chapterNumber]
        const verseNumber = getRandomInt(1, chapterVerse - 1)

        // const verse = { bookName: BOOK.name, chapterNumber, verseNumber }
        return `${BOOK.name}-${chapterNumber + 1}:${verseNumber}`
      }

      function checkWeekday(weekday: number) {
        if (weekday > 6) return 0
        if (weekday < 0) return 6
        return weekday
      }

      while (
        array[array.length - 1].currentDate < action.payload.currentMaxDays
      ) {
        const verse = randomVerse()
        array.push({
          currentDate: array[array.length - 1].currentDate + 1,
          currentWeekday: checkWeekday(
            array[array.length - 1].currentWeekday + 1
          ),
          verse,
        })
        // console.log({ Push: verse })
      }
      // Filler
      while (array[0].currentWeekday > 0) {
        array.unshift({
          currentDate: -1,
          currentWeekday: checkWeekday(array[0].currentWeekday - 1),
          verse: "",
        })
      }
      state.dateArray = array
    },
  },
})

export const { setMonthYear, dateMapper } = dateSlice.actions

export default dateSlice.reducer
