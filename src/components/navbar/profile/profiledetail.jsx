
import { useContext } from "react"
import { Contexts } from "../../../contextdata/contextdata"

function Details(){
    const {navmenu} = useContext(Contexts)
return(
<div className={`leading-2.5 ${navmenu?"hidden":"inline"}`}>
    <h3 className="text-black font-semibold text-2xl">Ahsan Khan</h3>
    <h6 className="text-gray-600 ">ahsankhan@gmail.com</h6>
</div>
)


}

export default Details