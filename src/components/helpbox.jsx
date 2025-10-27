import { ChevronDown, ChevronUp } from "lucide-react"
import { useContext } from "react"
import { Contexts } from "../contextdata/contextdata"

function Helpbox({text="Getting started" , idx,content,detail,help} ){

    return(
        <div className="flex flex-col relative not-sm:w-60  " key={idx}>
        <div className="p-2 min-w-[35vw] bg-white flex  rounded-2xl shadow-lg shadow-rose-100 justify-between items-center ">
        <h1 className="text-2xl font-semibold ">{text}</h1>
        <button className="cursor-pointer" onClick={()=>(help(idx))}>{!detail[idx]? <ChevronDown />:<ChevronUp />}</button>
        </div>

        <div className={`p-2 w-[35vw] bg-gray-600 z-30 mt-2 text-rose-100 flex  rounded-2xl  justify-between not-sm:w-[68vw]
               absolute bottom-full left-0  items-center ${!detail[idx]?"hidden":"block"} `}>
            <p>{content}</p>
        </div>

        </div>
    )
}

export default Helpbox