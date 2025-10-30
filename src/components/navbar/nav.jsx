import Logo from "../../assets/Logo.png"
import { TextAlignEnd, TextAlignStart } from "lucide-react"
import Linking from "./Link/link"
import Profile from "./profile/profile.jsx"
import { useContext } from "react"
import { Contexts } from "../../contextdata/contextdata.jsx"

function Nav(){
    const {navmenu,controlnav,clear}=useContext(Contexts)
    return(


     <aside className={`h-screen shadow-xl shadow-gray-700  bg-linear-to-tr from-red-300
       to-pink-200 fixed left-0 z-50 flex flex-col  max-w-72 p-3 not-sm:py-3 not-sm:px-0 sm:pb-10
     w-fit transition-all ease-in-out duration-1000 overflow-y-hidden ${navmenu?"items-center":null} `}> 

<div className="flex justify-center   items-center w-fit gap-3 ">
<img src={Logo} alt="logo" className={` w-52 h-auto ${navmenu?"hidden":"inline"}`} />
<button  onClick={controlnav} className=" cursor-pointer active:scale-90 " >
  {(navmenu)? <TextAlignEnd  /> : <TextAlignStart />}
</button>


      </div>
      
  <Linking />

 
<button onClick={clear}  className="text-white font-bold bg-linear-to-r from-blue-300 to-red-700  w-16 m-auto py-1 mb-3 rounded-2xl cursor-pointer active:scale-95">logout</button>

 <span className={`rotate-270 absolute bottom-68 text-7xl sm:text-6xl sm:bottom-52 cursor-pointer sm:hidden tracking-wider font-darkmode ${navmenu?"opacity-100":"hidden"} `}>Note<span className={` bg-linear-to-r from-blue-300 to-red-700 bg-clip-text text-transparent`}>Sphere</span></span>
      <Profile />
      
      
      </aside>
    )
}

export default Nav