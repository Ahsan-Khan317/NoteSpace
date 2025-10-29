import Createtitle from "./createtitle.jsx"
import Click from "../../components/homepageused/click.jsx"
import { Contexts } from "../../contextdata/contextdata.jsx"
import { useContext } from "react"
function Createpage (){
    const {tagref,titleref,noteref,cnclhandler ,savehandler} = useContext(Contexts)
    return(
      <div className="text-center h-screen w-full sm:w-[50vw] sm:m-auto flex flex-col">
     <Createtitle />

       <div className="flex-1 flex flex-col   p-4 gap-7">
<input type="text"  className="w-full bg-gray-700 text-white outline-none
 shadow-rose-100 shadow-sm text-2xl p-2 rounded-2xl " placeholder="Title..." required ref={titleref}  />

<textarea name="" ref={noteref} id="" placeholder="Write your note..." required className="flex-1 w-full bg-gray-700 text-white outline-none
 shadow-rose-100 shadow-sm text-2xl p-2 rounded-2xl"></textarea>

<input type="text" ref={tagref} required  className="w-full bg-gray-700 text-white outline-none shadow-rose-100 shadow-sm text-2xl p-2 rounded-2xl " placeholder="Add tags (e.g. #work #ideas)"  />


       </div>
       <div className="flex pb-11">
        <Click  clicked={savehandler} text="Save" props="px-6 py-2 text-5xl font-bold  w-fit  m-auto not-sm:text-3xl "/> <Click props="px-6 py-2 text-5xl font-bold  w-fit  m-auto not-sm:text-3xl " clicked={cnclhandler} text="Cancel" />
       </div>
       
</div>
    )
}



export default Createpage