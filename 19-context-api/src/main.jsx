import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Themcontext from './pages/Themcontext.jsx'

createRoot(document.getElementById('root')).render(
 
 <BrowserRouter>
 <Themcontext>
  <App />
</Themcontext>
</BrowserRouter>
)
