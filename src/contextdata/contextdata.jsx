
import { createContext, useEffect, useRef, useState } from "react"

export const Contexts = createContext()
import { useNavigate } from "react-router-dom"
function Contextdata(props){
//array for mappping in popular topics of help
  
    const article = [
  {
    title: "Getting Started",
    content:
      "Learn how to create your first note, manage folders, and explore the main features of NoteSpace. We'll guide you through setting up your workspace and syncing across all your devices so you can start organizing your ideas effortlessly."
  },
  {
    title: "Organize & Tag",
    content:
      "Keep your notes tidy and easy to find by using folders, color labels, and custom tags. You can also pin important notes at the top and search instantly by title or keyword for better productivity."
  },
  {
    title: "Collaboration",
    content:
      "Invite teammates or friends to collaborate on notes in real time. Share notes securely with editable or view-only access, leave comments, and stay updated as others make changes instantly."
  },
  {
    title: "Account & Billing",
    content:
      "Manage your NoteSpace account, update your personal details, and review your subscription plan. Upgrade to premium for additional storage, advanced features, and ad-free experience."
  }
]


//2nd for mapping 
const faqdata = [
  {
    title: "How do I create a new note?",
    content:
      "To create a new note, click the '+' or 'New Note' button on the top bar. You can start typing immediately, add a title, and use formatting tools to style your text. Your note will be saved automatically."
  },
  {
    title: "Can I sync notes across devices?",
    content:
      "Yes! NoteSpace automatically syncs your notes across all your devices once you sign in using the same account. You can access and edit your notes from your phone, tablet, or desktop seamlessly."
  },
  {
    title: "Is my data secure?",
    content:
      "Absolutely. All your notes are encrypted and securely stored on our cloud servers. Only you can access them through your account credentials. We do not share your data with third parties."
  },
  {
    title: "Can I share notes with others?",
    content:
      "Yes, you can share notes with friends or colleagues using the share option. You can give them 'View Only' or 'Edit' permissions depending on your collaboration needs."
  }]











    //states
  


const [navmenu,setnavmenu] = useState(true)
const [helpdetail,sethelpdetail]=useState([false,false,false,false])
const [faqdetail,setfaqdetail]=useState([false,false,false,false])
//functions 

const controlnav =()=>{
    setnavmenu(!navmenu)
}
  const controlhelp = (idx) => {
    sethelpdetail((prev) =>
      prev.map((item, i) => (i === idx ? !item : false))
    )};

  const controlfaq = (idx) => {
    setfaqdetail((prev) =>
      prev.map((item, i) => (i === idx ? !item : false))
    )};


    //for giving command on width
    const [iswidth,setiswidth]=useState(
    typeof window !=="undefined" && window.innerWidth <768
    )
  
    useEffect(() => {
  const handleWidth = () => {
    setiswidth(window.innerWidth < 768);
  };

  handleWidth(); // check once on mount

  window.addEventListener("resize", handleWidth);

  return () => window.removeEventListener("resize", handleWidth);
}, []);

    

//navigate

 const navigate = useNavigate()
    const createnotes =()=>{
        navigate("/createnotes")
    }




//ref

const titleref= useRef(null)
const noteref= useRef(null)
const tagref= useRef(null)
const bgColors = [
  "bg-yellow-200",
  "bg-green-200",
  "bg-blue-200",
  "bg-rose-200",
  "bg-orange-200",
  "bg-teal-200",
  "bg-indigo-200",
  "bg-lime-200",
  "bg-pink-200",
  "bg-cyan-200",
];
const bg = useRef(0);
const bgfunction =()=>{

const color = bgColors[bg.current];
  bg.current++;
  if(bg.current==bgColors.length-1){
    bg.current=0
  
  }  
    return color
}

const cnclhandler=()=>{
  titleref.current.value="";
    noteref.current.value="";
      tagref.current.value="";
}

const today = new Date()
  .toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
  .replace(/ /g, "-");

const [data,setdata] =useState(()=>{
   const store = JSON.parse(localStorage.getItem("key"))
  return store?store:[]
}
)
useEffect(()=>{
  localStorage.setItem("key",JSON.stringify(data))
},[data])

 const mynotenav = useNavigate();
const savehandler =()=>{
if(titleref.current.value =="" || noteref.current.value =="" || tagref.current.value =="" ){
  return alert("fill all the field ....")
}
else{
   mynotenav("/mynotes")
return setdata([{title:titleref.current.value,
 note:noteref.current.value,tag:tagref.current.value,date:today,color:bgfunction()},...data

])

}
 

}


const deletedata = (i)=>{
  const update =data.filter((_,idx)=>idx !=i)
 return setdata(update);
}



    return(
<Contexts.Provider value={{navmenu,setnavmenu,controlnav,helpdetail,sethelpdetail,controlhelp,article,faqdata,faqdetail,faqdetail,controlfaq,iswidth,createnotes,titleref,noteref,tagref,cnclhandler ,data,savehandler,deletedata}}>
    {props.children}
</Contexts.Provider>


    )
}
export default Contextdata