
import { createContext, useState } from "react"

export const Contexts = createContext()

function Contextdata(props){


    //states
  const [navmenu,setnavmenu] = useState(false)





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