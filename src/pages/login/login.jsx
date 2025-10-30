import { useContext, useEffect, useRef, useState } from "react";
import Click from "../../components/homepageused/click.jsx"
import {User,FolderLock,MailPlus,CirclePlus} from "lucide-react";
import { Contexts } from "../../contextdata/contextdata.jsx";




function Login() {
const {user,email,password,urlimg,clickimg,geturl,savelog,show} = useContext(Contexts)

  return (
    <div  className={`bg-gray-900 absolute  h-screen inset-0 z-60 flex flex-col justify-center items-center   ${show?"hidden":"block"} `}>
      <span className=" text-[96px] sm:text-[150px] cursor-pointer tracking-wider font-darkmode text-white">
        Note
        <span className="bg-linear-to-r from-blue-300 to-red-700 bg-clip-text text-transparent">
          Sphere
        </span>
      </span>

      <div className=" w-[90vw] sm:w-[40vw] flex   flex-col flex-1">

<div className="flex flex-col m-auto gap-4 mt-5">
    <div  className="flex bg-white py-4 px-3 rounded-2xl gap-2 "><User /><input type="text" ref={user}
    className="text-xl outline-none sm:text-2xl"
    placeholder="Enter your username..." 
    /></div>
    <div className="flex bg-white py-4 px-3 rounded-2xl gap-2 "><MailPlus /><input ref={email} type="Email" className="text-xl outline-none sm:text-2xl"    placeholder="Enter your Email..."/> </div>


    <div className="flex bg-white py-4 px-3 rounded-2xl gap-2 "><FolderLock /><input type="password" className="text-xl outline-none sm:text-2xl" ref={password}    placeholder="Enter your password..."/> </div>


        <div type="button" onClick={clickimg} className="flex justify-center items-center active:scale-90 cursor-pointer
        py-4 px-3 gap-2 text-2xl border-2 border-rose-200 bg-linear-to-r from-blue-300 to-red-700 bg-clip-text text-transparent  rounded-2xl">
            Add your Pic here  <CirclePlus color="#ffffff" /> 
            <input type="file" className="hidden" ref={urlimg} onChange={(e)=>{geturl(e)}}  />
            </div>

</div>


<Click text="Register " clicked={savelog}  />






      </div>
    </div>
  );
}

export default Login;
