### Known Issues

- Somewhat slow because of spaghetti useEffect hook
- Hydration doesn't match text being rendered

## Bible Helper Data

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

## Date & Time Helper Data

- # Added `dateTimePackage.ts` as a combination of the Date & Time utilities
- # Added a `index.ts` as Tree Shaking

from [src/dateTimeHelper]

~~monthNamer.ts~~ -> `currentMonth.ts`

- Function returns strings of the current number passed in it.
- Added a built-in leap year checker
- returns object with a `name` and `maxDays`

~~stringFormatTime.ts~~ -> `currentTime.ts`

- returns a [HH:MM xM] format

~~weekDayNamer.ts~~ -> `currentWeekday.ts`

- same as `monthName.ts` except for weekday names
