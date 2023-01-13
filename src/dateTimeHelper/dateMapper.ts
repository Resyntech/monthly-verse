interface DateMapper {
  currentDate: number
  currentMaxDays: number
  currentWeekday: number
}

const dateMapper = ({
  currentDate,
  currentMaxDays,
  currentWeekday,
}: DateMapper) => {
  let array = [{ currentDate, currentWeekday }]

  const checkWeekday = (weekday: number) => {
    if (weekday > 6) return 0
    if (weekday < 0) return 6
    return weekday
  }

  while (array[0].currentDate !== 1) {
    array.unshift({
      currentDate: array[0].currentDate - 1,
      currentWeekday: checkWeekday(array[0].currentWeekday - 1),
    })
  }
  while (array[array.length - 1].currentDate !== currentMaxDays) {
    array.push({
      currentDate: array[array.length - 1].currentDate + 1,
      currentWeekday: checkWeekday(array[array.length - 1].currentWeekday + 1),
    })
  }
  while (array[0].currentWeekday !== 0) {
    array.unshift({
      currentDate: 0,
      currentWeekday: checkWeekday(array[0].currentWeekday - 1),
    })
  }
  return array
}

export default dateMapper
