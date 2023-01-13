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
  }, [])
  return (
    <div className="grid h-screen items-center justify-center">
      <h1 className="text-2xl">Loading....</h1>
    </div>
  )
}

export const getServerSideProps = async () => {
  const baseURL = "api.scripture.api.bible"
  const options = {
    method: "GET",
    headers: {
      "api-key": process.env.NEXT_PUBLIC_BIBLE_APP_CREDENTIALS || "",
      "Content-Type": "application/json",
    },
  }

  const res = await fetch(`https://${baseURL}/v1/bibles`, options)
  // const res = await fetch("http://localhost1:3000/api/testBibles")
  const bibles = await res.json()

  return {
    props: bibles,
  }
}
export default App
