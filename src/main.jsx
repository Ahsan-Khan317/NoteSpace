import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Contextdata from './contextdata/contextdata.jsx'

createRoot(document.getElementById('root')).render(

<BrowserRouter>
<Contextdata >
  <StrictMode>
    <App />
  </StrictMode>
</Contextdata>
  </BrowserRouter>

)
