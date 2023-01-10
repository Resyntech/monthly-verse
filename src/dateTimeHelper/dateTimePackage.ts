import { currentMonth, currentTime, currentWeekday } from "./"

export const dateTimePackage = {
  [Object.keys({ currentMonth })[0]]: currentMonth(new Date()),
  [Object.keys({ currentTime })[0]]: currentTime(new Date()),
  [Object.keys({ currentWeekday })[0]]: currentWeekday(new Date()),
}
