import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { BlogProvider } from './BlogContext'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <BlogProvider>
        <App />
      </BlogProvider>
    </StrictMode>
  </BrowserRouter>
)
