import Head from "next/head"
import { useEffect, useRef } from "react"
import { VisualizeDate } from "../src/dateTimeHelper"
import { useReactToPrint } from "react-to-print"
import { useAppSelector } from "../src/redux/hooks"
import { useRouter } from "next/router"

const Home = (): JSX.Element => {
  const date = new Date()
  const router = useRouter()
  const bibles = useAppSelector((s) => s.bibles)
  const componentRef = useRef(null)

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  useEffect(() => {
    if (bibles.data.length === 1) router.push("/")
  })

  return (
    <>
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
        <div
          className={
            bibles.showVerse === ""
              ? "ease-in-out duration-300 opacity-0 rounded-xl fixed right-0 left-0 bottom-5 w-3/4 mx-auto p-2"
              : `bg-orange-100 ease-in-out duration-300 opacity-100  fixed right-0 left-0 bottom-5 w-3/4 mx-auto p-2`
          }
        >
          <h3>{bibles.showVerse}</h3>
          {/* <button className={bibles.showVerse === "" ? "invisible" : "block"}>
            Next
          </button> */}
        </div>
      </main>
    </>
  )
}

export default Home
