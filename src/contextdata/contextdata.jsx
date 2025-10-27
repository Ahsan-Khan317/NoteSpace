
import { createContext, useState } from "react"

export const Contexts = createContext()

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


//refs



    return(
<Contexts.Provider value={{navmenu,setnavmenu,controlnav,helpdetail,sethelpdetail,controlhelp,article,faqdata,faqdetail,faqdetail,controlfaq}}>
    {props.children}
</Contexts.Provider>


    )
}
export default Contextdata