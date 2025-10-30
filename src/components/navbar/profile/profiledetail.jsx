import { useContext } from "react"
import { Contexts } from "../../../contextdata/contextdata"

function Details() {
  const { navmenu, islogin } = useContext(Contexts)

  // Safely get the last logged-in user (if array exists and has length)
  const lastUser = Array.isArray(islogin) && islogin.length > 0 ? islogin[islogin.length - 1] : {}

  return (
    <div className={`flex flex-col gap-1 flex-1 flex-wrap  ${navmenu ? "hidden" : "inline"}`}>
      <h3 className="text-black font-semibold text-2xl">{lastUser.users }</h3>
      <h6 className="text-gray-600">{lastUser.gmail }</h6>
    </div>
  )
}

export default Details
