import Title from "../../components/homepageused/title.jsx"
import Para from "../../components/homepageused/para.jsx"
import Click from "../../components/homepageused/click.jsx"
import notebook from "../../assets/notebook.png"
import { useContext } from "react"
import { Contexts } from "../../contextdata/contextdata.jsx"

function Home(){
    const {iswidth,createnotes} = useContext(Contexts)
   
    return(
          <div className="text-center flex-1 flex  justify-center  h-screen w-full">
         <div className="flex  flex-1 flex-col p-4 gap-10  pb-7 " >
<Title />
<Para />
<Click clicked={createnotes} />
         </div>
         <div className={` flex-1 ${!iswidth?"flex":"hidden"} `} >
            <img src={notebook} alt="" />
         </div>
              

          </div>
    )
}
export default Home