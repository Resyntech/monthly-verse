import { DateMapper, DateMap } from "../../pages/_interface"
import bibleHelper from "../bibleHelper.json"
import { getRandomInt } from "../random"

const dateMapper = ({
  currentDate,
  currentMaxDays,
  currentWeekday,
}: DateMapper) => {
  let array: DateMap = [
    {
      currentDate,
      currentWeekday,
      verse: randomVerse(),
    },
  ]
  console.log(array)

  function randomVerse() {
    const BOOK = bibleHelper.data[getRandomInt(0, bibleHelper.data.length - 1)]
    const bookChapters = BOOK.chapters.length
    const chapterNumber = getRandomInt(0, bookChapters - 1)
    const chapterVerse = BOOK.chapters[chapterNumber]
    const verseNumber = getRandomInt(1, chapterVerse - 1)

    // const verse = { bookName: BOOK.name, chapterNumber, verseNumber }
    return `${BOOK.name}-${chapterNumber + 1}:${verseNumber}`
  }

  const checkWeekday = (weekday: number) => {
    if (weekday > 6) return 0
    if (weekday < 0) return 6
    return weekday
  }

  while (array[0].currentDate !== 1) {
    const verse = randomVerse()
    array.unshift({
      currentDate: array[0].currentDate - 1,
      currentWeekday: checkWeekday(array[0].currentWeekday - 1),
      verse,
    })
    // console.log({ Unshift: verse })
  }
  while (array[array.length - 1].currentDate !== currentMaxDays) {
    const verse = randomVerse()
    array.push({
      currentDate: array[array.length - 1].currentDate + 1,
      currentWeekday: checkWeekday(array[array.length - 1].currentWeekday + 1),
      verse,
    })
    // console.log({ Push: verse })
  }
  // Filler
  while (array[0].currentWeekday !== 0) {
    array.unshift({
      currentDate: 0,
      currentWeekday: checkWeekday(array[0].currentWeekday - 1),
      verse: randomVerse(),
    })
  }
  return array
}

export default dateMapper
