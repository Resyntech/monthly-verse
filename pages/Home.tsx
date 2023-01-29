import Head from "next/head"
import { useRef } from "react"
import { VisualizeDate } from "../src/dateTimeHelper"
import { useReactToPrint } from "react-to-print"
import { useAppDispatch, useAppSelector } from "../src/redux/hooks"
import { useRouter } from "next/router"
import { setMonthYear } from "../src/redux/reducers/dateReducer"

const Home = (): JSX.Element => {
  const date = new Date()
  const router = useRouter()
  const bible = useAppSelector((s) => s.bible)
  const dateArray = useAppSelector((s) => s.date.dateArray)
  const componentRef = useRef(null)
  const dispatch = useAppDispatch()

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  const handleChangeDate = (e: any) => dispatch(setMonthYear(e.target.value))

  // useEffect(() => {
  //   if (bible.data.length === 1) router.push("/")
  // })

  return (
    <>
      <Head>
        <title>Kainos Verses</title>
        <meta name="description" content="Randomized Bible Verses monthly" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <button
        className="bg-pastel-dark text-pastel-color2 fixed bottom-4 right-4 rounded-full p-4 font-space"
        onClick={() => {
          handlePrint()
          if (dateArray)
            localStorage.setItem("print", JSON.stringify(dateArray))
        }}
      >
        Print
      </button>
      <div className="absolute top-4 right-4 grid grid-flow-cols z-10">
        <button className="relative" onClick={handleChangeDate} value="minus">
          Previous
        </button>
        <button className="relative" onClick={handleChangeDate} value="plus">
          Next
        </button>
      </div>
      <main
        className="grid grid-flow-col justify-center w-screen h-screen p-2 font-space"
        ref={componentRef}
      >
        <VisualizeDate />
        <div
          className={
            bible.showVerse === ""
              ? "ease-in-out duration-300 opacity-0 rounded-xl fixed right-0 left-0 bottom-5 w-3/4 mx-auto p-2"
              : `bg-pastel-dark text-pastel-accent ease-in-out duration-300 opacity-100  fixed right-0 left-0 bottom-5 w-3/4 mx-auto p-2`
          }
        >
          <h3>{bible.showVerse}</h3>
        </div>
      </main>
    </>
  )
}

export default Home
