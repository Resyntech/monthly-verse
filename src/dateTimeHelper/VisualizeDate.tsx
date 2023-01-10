import { useState, useEffect } from "react"
import { currentMonth } from "."
import { oldTestament } from "../bibleHelper"
import { weekdays } from "./currentWeekday"

function VisualizeDate() {
  const date = new Date()
  const currentDate = date.getDate()
  const currentMaxDays = currentMonth(date).maxDays
  const currentWeekdayname = date.getDay()

  /*=======================================================*/
  const randomInt = (max: number, min: number) =>
    Math.round(Math.random() * (max - min)) + min
  const oldLength = Object.keys(oldTestament).length - 1
  // const book = Object.keys(oldTestament)[randomInt(oldLength, 0)]
  const exodusLength = oldTestament.exodus.length - 1
  let randomExodus = randomInt(exodusLength, 0)
  /*=======================================================*/

  const [state, setState] = useState([
    {
      date: currentDate,
      weekDay: currentWeekdayname,
      verse: `Exodus ${randomExodus} ${oldTestament.exodus[randomExodus]}`,
    },
  ])
  const [isReady, setReady] = useState<boolean>(false)
  const dateFiller = [0, 0, 0, 0, 0, 0, 0]

  function checkWeekday(day: number) {
    switch (day) {
      case -1:
        return 6
      case 7:
        return 0
      default:
        return day
    }
  }

  useEffect(() => {
    setReady(false)
    // Add data in array at the Beginning
    while (state[0].date !== 1) {
      let randomExodus = randomInt(exodusLength, 0)
      setState((prev) => {
        let array = prev
        array.unshift({
          date: prev[0].date - 1,
          weekDay: checkWeekday(prev[0].weekDay - 1),
          verse: `Exodus ${randomExodus} ${oldTestament.exodus[randomExodus]}`,
        })
        return array
      })
    }
    // Add data in array at the end
    while (state[state.length - 1].date !== currentMaxDays) {
      let randomExodus = randomInt(exodusLength, 0)
      setState((prev) => {
        let array = prev
        array.push({
          date: prev[state.length - 1].date + 1,
          weekDay: checkWeekday(prev[state.length - 1].weekDay + 1),
          verse: `Exodus ${randomExodus} ${oldTestament.exodus[randomExodus]}`,
        })
        return array
      })
    }
    setReady(true)
  }, [])

  return (
    <>{isReady}</> && (
      <>
        <h1 className="uppercase text-2xl text-center">
          {currentMonth(date).name}
        </h1>
        <section className="grid grid-cols-7 gap-1">
          {weekdays.map((value, i: number) => {
            return (
              <div
                className="uppercase bg-[#AD8E70] h-10 text-center text-[#243763]"
                key={i}
              >
                {value.substring(0, 3)}
              </div>
            )
          })}
          {dateFiller.map((value, i: number) =>
            i < state[0].weekDay ? (
              <div key={i} className="invisible">
                {value}
              </div>
            ) : (
              <div key={i}></div>
            )
          )}
          {state.map((value, i: number) => {
            return (
              <div
                key={i}
                className="h-16 bg-[#FFEBB7] text-[#FF6E31] pl-1 font-thin text-xs"
              >
                {value.date}
                <span className="text-black text-sm flex justify-center items-center">
                  {value.verse}
                </span>
              </div>
            )
          })}
        </section>
      </>
    )
  )
}

export default VisualizeDate
