
import Para from "../../components/homepageused/para.jsx"
import Dp from "../../components/navbar/profile/dp.jsx"
import { useContext } from "react"
import { Contexts } from "../../contextdata/contextdata.jsx"
import books from "../../assets/books.gif"
import pic from "../../assets/pic.jpg"
function About(){
    const {iswidth} = useContext(Contexts)
   
    return(
          <div className="text-center flex-1 flex  justify-center  h-screen w-full">
         <div className="flex  flex-1 flex-col p-4  pb-7 " >

            <div className="m-auto  text-center gap-2 flex"><span className="text-4xl  font-bold bg-gradient-to-r from-blue-300 to-red-700 bg-clip-text text-transparent">About</span><span className="text-4xl text-white font-bold">US</span></div>

<Para pt="pt-12 not-sm:pt-12" cnt="Welcome to NoteSphere, your personal space to capture and organize ideas with ease.
We believe every great idea deserves a place to grow — and NoteSphere is that space! ✨

💡 Our Mission

To help you note down thoughts quickly, stay organized, and never lose an idea again.


🚀 Why Choose NoteSphere

⚡ Simple, fast, and responsive design

🖋️ Create and edit notes instantly

🎨 Add colors and tags to organize easily

🔍 Search and pin important notes

☁️ Auto-save your notes securely

🌙 Dark & Light modes for comfort

💻 Accessible anytime, anywhere

❤️ Made With Passion

NoteSphere is built for thinkers, students, and creators who want a clean, modern, and clutter-free note-taking experience." />
  <div className="flex justify-around p-2 gap-2 items-center">
<Dp img={pic} />
<div className={`leading-2.5 `}>
    <h3 className="text-rose-200 font-semibold text-2xl "> Created by :-  Ahsan Khan</h3>
    <h6 className="text-rose-200 sm:text-2xl ">  Ahsan@enjoy.com</h6>
</div>

        </div>


         </div>
         <div className={` flex-1 ${iswidth?"hidden":"flex"} justify-center items-center pb-14  `} >
            <img src={books} alt="books image" className="size-[40vw]" />
         </div>
              

          </div>
    )
}
export default About