import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../src/redux/hooks"
// import { setBible } from "../src/redux/reducers/bibleReducer"
import { Bible } from "../src/_interface"
import { useRouter } from "next/router"

const App = (bible: Bible): JSX.Element => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const state = useAppSelector((s) => s.bible)

  useEffect(() => {
    // dispatch(setBibles(bibles))
    router.push("/Home")
  }, [dispatch])
  return (
    <div className="bg-pastel-dark grid h-screen items-center justify-center">
      <h1 className="text-pastel-accent text-2xl">Loading....</h1>
    </div>
  )
}

export const getServerSideProps = async () => {
  const baseURL = "https://api.scripture.api.bible/v1/bibles"
  const options = {
    method: "GET",
    headers: {
      "Api-Key": process.env.NEXT_PUBLIC_BIBLE_APP_CREDENTIALS || "",
      "Content-Type": "application/json",
    },
  }

  const res = await fetch(`${baseURL}`, options)
  // const res = await fetch("http://localhost1:3000/api/testBibles")
  const bible = await res.json()

  return {
    props: bible,
  }
}
export default App
