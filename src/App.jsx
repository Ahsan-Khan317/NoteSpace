

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
<div className="flex h-screen overflow-hidden">
  {/* Sidebar */}
  <Nav />

  {/* Main content area */}
  <main className="flex-1 overflow-y-auto pl-[110px] not-sm:pl-[86.5px] bg-gray-900">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mynotes" element={<Mynotes />} />
      <Route path="/createnotes" element={<Createnote />} />
      <Route path="/about" element={<About />} />
      <Route path="/help" element={<Help />} />
    </Routes>
  </main>
</div>


  )
}

export default App
