const stringifyValue = (value: number) =>
  value > 9 ? JSON.stringify(value) : `0${value}`

export default function currentTime(date: Date) {
  const minutes = date.getMinutes()
  const hours = date.getHours()

  let hour = hours
  let meridiem = "ante"
  if (hour > 11) meridiem = "post"
  // getHours() returns between 13-23 if it is afterlunch
  if (hour > 12) hour -= 12
  // getHours() returns 0 when it is 12 Midnight
  if (hour === 0) hour = 12

  /* Over complicating the Ante Meridiem or Post Meridiem by defining the name of the variable
    and getting the first character of each word for the abbreviation*/
  return `${stringifyValue(hour)}:${stringifyValue(minutes)} ${meridiem
    .charAt(0)
    .concat(
      Object.keys({
        meridiem,
      })[0].charAt(0)
    )}`
}
