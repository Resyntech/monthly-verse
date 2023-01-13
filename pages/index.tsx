import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../src/redux/hooks"
import { setBibles } from "../src/redux/reducers/biblesReducer"
import { Bibles } from "./_interface"
import { useRouter } from "next/router"

const App = (bibles: Bibles): JSX.Element => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const state = useAppSelector((s) => s.bibles)

  useEffect(() => {
    dispatch(setBibles(bibles))
    router.push("/Home")
  }, [dispatch, bibles, router])
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
  const bibles = await res.json()

  return {
    props: bibles,
  }
}
export default App
