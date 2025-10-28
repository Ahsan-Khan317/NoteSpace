
import { useContext } from "react"
import Heading  from "../../components/helpboxcard/heading.jsx"
import Helpbox from "../../components/helpboxcard/helpbox.jsx"
import { Contexts } from "../../contextdata/contextdata.jsx"

function Help(){
const {article,faqdata,controlhelp,helpdetail,faqdetail,controlfaq} = useContext(Contexts)

    

    return(
        <div className="text-center bg-gray-900 min-h-screen flex flex-col items-start gap-20  overflow-x-hidden justify-start px-4 py-8 not-sm:py-0 w-full sm:gap-10 overflow-y-auto">

 <div><Heading size="text-7xl"  text="How can we help?" color="bg-gradient-to-r from-blue-300 to-red-700 bg-clip-text text-transparent"  /></div>

<div className="flex flex-1   w-full gap-4 h-auto not-sm:flex-col  ">
<div className="flex-1 flex-col flex gap-10 not-sm:gap-4  ">
 <div className="text-start">
    <Heading size={"text-4xl"} sm ="not-sm:text-3xl " text="Popular Topics" color="bg-gradient-to-r from-red-700 to-blue-300 bg-clip-text text-transparent"  />
    </div>

{
   article.map((e,idx)=>(
    <div key={idx} className="p-2 flex flex-col w-fit gap-2 relative justify-center"><Helpbox text={e.title} 
    content={e.content} idx={idx} help={controlhelp} detail={helpdetail} /></div>

    ))
} 

</div>

<div className="flex-1  flex-col flex gap-10  ">
 <div className="text-start">
    <Heading size={"text-4xl"} sm ="not-sm:text-3xl " text="Frequently Asked Questions (FAQ)" color="bg-gradient-to-r from-red-700 to-blue-300 bg-clip-text text-transparent"  />
    </div>
{
   faqdata.map((e,idx)=>(
    <div key={idx} className="p-2 flex flex-col w-fit justify-center gap-2 relative"><Helpbox text={e.title} 
    content={e.content} idx={idx} help={controlfaq} detail={faqdetail}  /></div>

    ))
} 

</div>

</div>





          </div>
    )
}
export default Help




