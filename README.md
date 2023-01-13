- ### To be added

01/13/2023

- Local storage caching of the month
- Database

- ### Known Issues

  01/11/2023
  ~~- Somewhat slow because of spaghetti useEffect hook~~
  ~~- Hydration doesn't match text being rendered~~

- ## Bible Helper Data

from [src/bibleHelper.ts]

```
const testament = {
    bookName = Array<verses>
}
```

There are 2 testaments in the Bible:

- Old Testament(37 Books)
- New Testament(29 Books)

With corresponding book names
the `Array.length` are the Book's chapter
while the `verses` represents the number of verses in each chapter.

- ## Date & Time Helper Data

01/13/2023

- Added `dateMapper.ts` this will provide a calendar graph based on the current month of the year, unfortunately `--------------------
const currentWeekday
--------------------`
  only relies on the current weekday of the day, this implies that changing month will never reflect the right UI

01/11/2023

- Added `dateTimePackage.ts` as a combination of the Date & Time utilities
- Added `index.ts` as Tree Shaking

from [src/dateTimeHelper]

~~monthNamer.ts~~ -> `currentMonth.ts`

- Function returns strings of the current number passed in it.
- Added a built-in leap year checker
- returns object with a `name` and `maxDays`

~~stringFormatTime.ts~~ -> `currentTime.ts`

- returns a [HH:MM xM] format

~~weekDayNamer.ts~~ -> `currentWeekday.ts`

- same as `monthName.ts` except for weekday names
