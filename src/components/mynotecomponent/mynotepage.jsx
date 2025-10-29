import { useContext } from "react"
import Createtitle from "../createpagecomponent/createtitle"
import Box from "./box.jsx"
import { Contexts } from "../../contextdata/contextdata.jsx"
function Myvichaar (){
    const {data,deletedata} =useContext(Contexts)
    return(
 <div className="text-center min-h-screen h-auto w-full sm:w-[50vw] sm:m-auto  flex flex-col">
     <Createtitle white="My" grad="Notes"   />
 {    
data.map((e,i)=>{
return <Box key={i} title ={e.title} note = {e.note} tag ={e.tag} date ={e.date} color = {e.color} 
deletedata={deletedata} idx ={i} />


})
}



   
   
     </div>

    )
}
export default Myvichaar