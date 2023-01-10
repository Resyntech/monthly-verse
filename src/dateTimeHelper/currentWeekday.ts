export const weekdays = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
]

export default function currentWeekday(date: Date) {
  const weekDay = date.getDay()
  return weekdays[weekDay]
}
