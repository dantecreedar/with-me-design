import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import React from 'react'
/* auth */
import {Auth0Provider} from "@auth0/auth0-react"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Auth0Provider 
                    domain='astra-proyect.us.auth0.com' 
                    clientId='oOmFjFjxmhxZSDdQ0GVEQBS1UoZC5Bd5' 
                    redirectUri={window.location.origin}
                    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
)