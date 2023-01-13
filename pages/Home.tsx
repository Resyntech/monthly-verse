import Head from "next/head"
import { useEffect, useRef, useState } from "react"
import { VisualizeDate } from "../src/dateTimeHelper"
import { useReactToPrint } from "react-to-print"
import { useAppSelector } from "../src/redux/hooks"
import { useRouter } from "next/router"
import axios from "axios"
import bibleHelper from "../src/dateTimeHelper/bibleHelper.json"

const Home = (): JSX.Element => {
  const date = new Date()
  const router = useRouter()
  const bibles = useAppSelector((s) => s.bibles)
  const componentRef = useRef(null)
  const [state, setState] = useState<{ value: number; id: number }[]>([])
  const [bookCode, setBookCode] = useState<string>("GEN")
  const bibleId = "de4e12af7f28f599-02"
  const instance = axios.create({
    baseURL: "https://api.scripture.api.bible/v1/bibles",
    // timeout: 1000,
    headers: {
      "api-key": process.env.NEXT_PUBLIC_BIBLE_APP_CREDENTIALS,
      "Content-Type": "application/json",
    },
  })

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  useEffect(() => {
    setState([])
    instance.get(`${bibleId}/books/${bookCode}/chapters`).then((respo) => {
      respo.data.data.map((chapter: { id: string }, id: number) => {
        instance.get(`${bibleId}/chapters/${chapter.id}/verses`).then((res) => {
          return setState((prev) => {
            let array = [...prev]
            if (id > 0) array.push({ value: res.data.data.length, id })
            array.sort((a, b) => a.id - b.id)
            return array
          })
        })
      })
    })
    // const reloadIndex = () => {

    //   bibles.data.length === 1 ? router.push("/") : null
    // }
    // return reloadIndex()
  }, [bookCode])
  console.log(state.map((val) => val.value))

  return (
    <>
      <select
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          setBookCode(e.currentTarget.value)
        }}
      >
        {bibleHelper.data.map(({ name, id }) => {
          return (
            <option key={id} value={id}>
              {name}
            </option>
          )
        })}
      </select>
      <Head>
        <title>Kainos Verses</title>
        <meta name="description" content="Randomized Bible Verses monthly" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <button
        className="fixed bottom-4 right-4 rounded-full bg-orange-200 p-4"
        onClick={handlePrint}
      >
        Print
      </button>
      <main className="mx-2" ref={componentRef}>
        <VisualizeDate />
      </main>
    </>
  )
}

export default Home
