import { FileText, House,FilePlus,Info, HelpCircle } from "lucide-react";
import { useContext } from "react";
import {  NavLink } from "react-router-dom";
import { Contexts } from "../../../contextdata/contextdata";



function Linking() {
   const {navmenu}=useContext(Contexts)
     const linkdata = [
    { to: "/", label: "Home", icon: <House size={20} /> },
    { to: "/mynotes", label: "My Notes", icon: <FileText size={20} /> },
    { to: "/createnotes", label: "Create Notes", icon: <FilePlus size={20} /> },
    { to: "/about", label: "About", icon: <Info size={20} /> },
    { to: "/help", label: "Help", icon: <HelpCircle size={20} /> },
  ];
  return (
    <div className="flex flex-col gap-2 p-4 flex-1 w-fit">

{linkdata.map((e,idx)=>(
<NavLink key={idx} to = {e.to}
 className={({isActive})=>(`flex items-center transition duration-200
  ease-out gap-2 p-2 rounded hover:bg-gray-400   
   ${isActive? "bg-gray-900 text-white": null }`)}>

{e.icon}  {!navmenu && <span>{e.label}</span>}
</NavLink>

))}


    
    </div>
  );
}

export default Linking;
