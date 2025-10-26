
import { createContext, useState } from "react"

export const Contexts = createContext()

function Contextdata(props){


    //states
  
const iswidth = typeof window !== "undefined" && window.innerWidth < 768;

const [navmenu,setnavmenu] = useState(iswidth?true:false)


//functions 

const controlnav =()=>{
    setnavmenu(!navmenu)
}





//refs



    return(
<Contexts.Provider value={{navmenu,setnavmenu,controlnav}}>
    {props.children}
</Contexts.Provider>


    )
}
export default Contextdata