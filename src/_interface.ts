export interface Bible {
  data: [
    {
      id?: string
      dblId?: string
      abbreviation?: string
      abbreviationLocal?: string
      language?: {
        id?: string
        name?: string
        nameLocal?: string
        script?: string
        scriptDirection?: string
      }
      countries?: [
        {
          id?: string
          name?: string
          nameLocal?: string
        }
      ]
      name?: string
      nameLocal?: string
      description?: string
      descriptionLocal?: string
      relatedDbl?: string
      type?: string
      updatedAt?: Date
      audioBibles?: [
        {
          id?: string
          name?: string
          nameLocal?: string
          description?: string
          descriptionLocal?: string
        }
      ]
    }
  ]
  showVerse: string
}

export interface DateMapper {
  currentDate: number
  currentMaxDays: number
  currentWeekday: number
}

export interface BibleHelper {
  bibleId: string
  data: [
    {
      id: string
      abbreviation: string
      name: string
      nameLong: string
      chapters: Array<number>
    }
  ]
}

export type DateMap = Array<{
  currentDate: number
  currentWeekday: number
  verse: string
}>
