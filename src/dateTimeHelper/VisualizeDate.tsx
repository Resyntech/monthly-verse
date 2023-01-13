import axios from "axios"
import { useEffect, useState } from "react"
import { currentMonth } from "."
import { DateMap } from "../../pages/_interface"
import { weekdays } from "./currentWeekday"
import dateMapper from "./dateMapper"
import bibleHelper from "../bibleHelper.json"
import { setVerse } from "../redux/reducers/biblesReducer"
import { useAppDispatch } from "../redux/hooks"

function VisualizeDate() {
  const date = new Date()
  const dispatch = useAppDispatch()
  const instance = axios.create({
    baseURL: "https://api.scripture.api.bible/v1/bibles",
    headers: {
      "api-key": process.env.NEXT_PUBLIC_BIBLE_APP_CREDENTIALS,
      "Content-Type": "application/json",
    },
  })

  const currentDate = date.getDate()
  const currentMaxDays = currentMonth(date).maxDays
  const currentWeekday = date.getDay()

  const [dateMap, setDateMap] = useState<DateMap>()

  useEffect(
    () =>
      setDateMap(dateMapper({ currentDate, currentMaxDays, currentWeekday })),
    [currentDate, currentMaxDays, currentWeekday]
  )

  return (
    <section>
      <h1 className="uppercase text-2xl text-center">
        {currentMonth(date).name}
      </h1>
      <div className="grid grid-cols-7 gap-1">
        {weekdays.map((value, i: number) => {
          return (
            <div
              className="uppercase bg-orange-200 text-center text-blue-600"
              key={i}
            >
              {value.substring(0, 3)}
            </div>
          )
        })}
        {dateMap?.map(({ currentDate, verse }, i: number) => {
          const isFillerDate = currentDate === 0
          return (
            <div
              key={i}
              className={`${
                currentDate === 0 ? "bg-green-100" : "bg-green-200"
              } h-24 p-2`}
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
              <p className="text-green-600 flex flex-col text-xs font-thin">
                {isFillerDate ? "" : currentDate}
                <span className="text-black text-base font-normal capitalize">
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
