import Dp from "./dp.jsx"
import Details  from "./profiledetail.jsx"
import { useContext } from "react"
import { Contexts } from "../../../contextdata/contextdata.jsx"
function Profile(){
     const {preview}=useContext(Contexts)
    return(

        <div className="flex justify-around p-2 gap-2 items-center">
<Dp img={preview} />
<Details />

        </div>
    )
}
export default Profile