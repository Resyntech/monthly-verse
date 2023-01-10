export default function currentMonth(date: Date) {
  const month = date.getMonth()
  const febRef = 1
  const months = [
    { name: "january", maxDays: 31 },
    { name: "february", maxDays: 28 },
    { name: "march", maxDays: 31 },
    { name: "april", maxDays: 30 },
    { name: "may", maxDays: 31 },
    { name: "june", maxDays: 30 },
    { name: "july", maxDays: 31 },
    { name: "august", maxDays: 31 },
    { name: "september", maxDays: 30 },
    { name: "october", maxDays: 31 },
    { name: "november", maxDays: 30 },
    { name: "december", maxDays: 31 },
  ]

  let leapYear = false
  if (date.getFullYear() % 4 === 0) leapYear = true

  // If it is leap year force to return february with a maxday of 29
  return leapYear && month === febRef
    ? { name: months[febRef].name, maxDays: months[febRef].maxDays + febRef }
    : months[month]
}
