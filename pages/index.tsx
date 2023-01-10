import Head from "next/head"
// import { useEffect } from "react"
import { VisualizeDate } from "../src/dateTimeHelper/"
// import { oldTestament, newTestament } from "../src/bibleHelper"

export default function Home() {
  const date = new Date()
  // useEffect(() => console.log(""), [])

  return (
    <>
      <Head>
        <title>Kainos Verses</title>
        <meta name="description" content="Randomized Bible Verses monthly" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="w-[90%] mx-auto">
        <VisualizeDate />
      </main>
    </>
  )
}
