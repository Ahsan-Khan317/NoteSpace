import { Contexts } from "../../../contextdata/contextdata"
import pic from "../../../assets/pic.jpg"
import { useContext } from "react"

function Dp(){
     const {navmenu}=useContext(Contexts)
    return (
        <>
        <img src={pic}  alt="" className={` size-[70px] rounded-full border-2 
            border-green-300 `}/>
        </>
    )
}
export default Dp