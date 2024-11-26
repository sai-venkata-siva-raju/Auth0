
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Auth0Provider } from '@auth0/auth0-react';
createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-k3ptqhi1i6qftvze.us.auth0.com"
    clientId="jrmiwXcpUVQX4etOnt4upsFFQV5PlwcR"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
