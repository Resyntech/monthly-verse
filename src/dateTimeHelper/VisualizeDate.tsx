import axios from "axios"
import { useEffect } from "react"
import { currentMonth } from "."
import { weekdays } from "./currentWeekday"
import bibleHelper from "../bibleHelper.json"
import { setVerse } from "../redux/reducers/bibleReducer"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { dateMapper } from "../redux/reducers/dateReducer"

function VisualizeDate() {
  const dispatch = useAppDispatch()
  const instance = axios.create({
    baseURL: "https://api.scripture.api.bible/v1/bibles",
    headers: {
      "api-key": process.env.NEXT_PUBLIC_BIBLE_APP_CREDENTIALS,
      "Content-Type": "application/json",
    },
  })

  const dateState = useAppSelector((state) => state.date)

  const date = new Date()
  date.setFullYear(dateState.year)
  date.setMonth(dateState.month)
  date.setDate(1)
  const currentDate = date.getDate()
  const currentMonthInfo = currentMonth({
    month: dateState.month,
    year: dateState.year,
  })
  const currentWeekday = date.getDay()

  useEffect(() => {
    dispatch(
      dateMapper({
        currentDate,
        currentMaxDays: currentMonthInfo.maxDays,
        currentWeekday,
      })
    )
  }, [dateState.month])

  return (
    <section>
      <h1 className="text-pastel-dark outline-pastel-dark uppercase text-6xl text-center">
        {currentMonthInfo.name}
      </h1>
      <div className="bg-pastel-dark grid grid-cols-7 gap-1 p-4 rounded-lg">
        {weekdays.map((value, i: number) => {
          return (
            <div
              className=" text-pastel-accent uppercase text-center shadow-lg"
              key={i}
            >
              {value.substring(0, 3)}
            </div>
          )
        })}
        {dateState.dateArray?.map(({ currentDate, verse }, i: number) => {
          const isFillerDate = currentDate < 0
          return (
            <div
              key={i}
              className={`${
                currentDate < 0 ? "bg-pastel-color1/20 " : "bg-pastel-color1"
              } rounded-xl h-24 p-2`}
              onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                const spanText =
                  e.currentTarget.lastChild?.lastChild?.textContent
                const lastSpace = spanText?.lastIndexOf(" ")
                const bookName = spanText?.substring(0, lastSpace)
                const book = bibleHelper.data.find((value) => {
                  if (bookName === value.name) return value
                })
                const chapterVerse = spanText
                  ?.substring((lastSpace || -1) + 1, spanText.length)
                  .replace(":", ".")
                instance
                  .get(
                    `${process.env.NEXT_PUBLIC_BIBLE_ID}/verses/${book?.id}.${chapterVerse}?content-type=text`
                  )
                  .then(({ data }) => dispatch(setVerse(data.data.content)))
                  .finally(() => setTimeout(() => dispatch(setVerse("")), 8000))
              }}
            >
              <p className="text-pastel-color2 flex flex-col gap-4 text-xs font-thin">
                {isFillerDate ? "" : currentDate}
                <span className="text-pastel-accent font-normal capitalize">
                  {isFillerDate ? "" : verse.replace("-", " ")}
                </span>
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default VisualizeDate
