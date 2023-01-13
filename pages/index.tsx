import Head from "next/head"
import { useRef } from "react"
import { VisualizeDate } from "../src/dateTimeHelper/"
import { useReactToPrint } from "react-to-print"

const App: React.FC = () => {
  const date = new Date()
  const componentRef = useRef(null)
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
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
      </main>
    </>
  )
}

export default App
