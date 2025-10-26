

import { Routes ,Route } from 'react-router-dom'
import './App.css'
import Nav from "./components/navbar/nav.jsx"


import Home from "./pages/homepage/homepage.jsx"
import Createnote from "./pages/createnote/create.jsx"
import Mynotes from "./pages/mynotes/mynotes.jsx"
import Help from "./pages/help/help.jsx"
import About from "./pages/about/about.jsx"

function App() {


  return (
<div className='flex not-sm:pl-[86.5px] pl-[110px] '>
<Nav />
<div  className='flex-1'>
  <Routes>
 <Route path="/" element={<Home />} />
          <Route path="/mynotes" element={<Mynotes />} />
          <Route path="/createnotes" element={<Createnote />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />

</Routes>
</div>

</div>

  )
}

export default App
