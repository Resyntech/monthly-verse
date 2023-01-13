import { currentMonth } from "."
// import { oldTestament } from "../bibleHelper"
import { weekdays } from "./currentWeekday"
import dateMapper from "./dateMapper"

function VisualizeDate() {
  const date = new Date()

  const currentDate = date.getDate()
  const currentMaxDays = currentMonth(date).maxDays
  const currentWeekday = date.getDay()

  const dateMap = dateMapper({ currentDate, currentMaxDays, currentWeekday })

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
        {dateMap?.map((value, i: number) => {
          const isFillerDate = value.currentDate === 0
          return (
            <div
              key={i}
              className={`${
                value.currentDate === 0 ? "bg-green-100" : "bg-green-200"
              } h-24 p-2`}
            >
              <p className="text-green-600 flex flex-col text-xs font-thin">
                {isFillerDate ? "" : value.currentDate}
                <span className="text-black text-base font-normal capitalize">
                  {isFillerDate ? "" : "value.verse"}
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
