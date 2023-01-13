import { useState, useEffect } from "react"
import { currentMonth } from "."
import { oldTestament } from "../bibleHelper"
import { weekdays } from "./currentWeekday"
import dateMapper from "./dateMapper"

function VisualizeDate() {
  const date = new Date()
  const [state, setState] = useState(date.getMonth())
  const buttons = ["minus", "plus"]

  const currentDate = date.getDate()
  const currentMaxDays = currentMonth(date).maxDays
  const currentWeekday = date.getDay()

  const dateMap = dateMapper({ currentDate, currentMaxDays, currentWeekday })

  const buttonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    // e.stopPropagation()
    const button: HTMLButtonElement = e.currentTarget
    setState((prev) => {
      const value = button.innerHTML === "minus" ? -1 : 1
      return prev + value
    })
  }

  return (
    <>
      <p>{state}</p>
      <h1 className="uppercase text-2xl text-center">
        {currentMonth(date).name}
      </h1>
      <div className="flex gap-2">
        {buttons.map((name) => {
          return (
            <button
              key={name}
              onClick={buttonHandler}
              className="bg-black text-white"
              disabled={
                (name === "minus" && state === 0) ||
                (name === "plus" && state === 11)
                  ? true
                  : false
              }
            >
              {name}
            </button>
          )
        })}
      </div>
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
        {dateMap?.map((value, i: number) => {
          return (
            <p key={i}>
              {value.currentDate}
              {/* <span>{value.verse}</span> */}
            </p>
          )
        })}
      </section>
    </>
  )
}

export default VisualizeDate

// /*=======================================================*/
// const randomInt = (max: number, min: number) =>
//   Math.round(Math.random() * (max - min)) + min
// const oldLength = Object.keys(oldTestament).length - 1
// // const book = Object.keys(oldTestament)[randomInt(oldLength, 0)]
// const exodusLength = oldTestament.exodus.length - 1
// let randomExodus = randomInt(exodusLength, 0)
// /*=======================================================*/

// const [state, setState] = useState([
//   {
//     date: currentDate,
//     weekDay: currentWeekdayname,
//     verse: `Exodus ${randomExodus} ${oldTestament.exodus[randomExodus]}`,
//   },
// ])
// function checkWeekday(day: number) {
//   switch (day) {
//     case -1:
//       return 6
//     case 7:
//       return 0
//     default:
//       return day
//   }
// }
