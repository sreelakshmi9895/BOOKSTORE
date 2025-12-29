import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ShareContext from './contextAPI/ShareContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter> 
  <GoogleOAuthProvider clientId='887495925996-u2bivnebmf1k5p6fb8kumg04efhcl4gb.apps.googleusercontent.com'> 
    <ShareContext>
      <App/>
    </ShareContext>
    </GoogleOAuthProvider>
   </BrowserRouter>
  </StrictMode>,
)
