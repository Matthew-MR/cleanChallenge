import React from 'react'
import ReactDOM from 'react-dom/client'

import PasswordManager from './pages/passwordManager';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PasswordManager/>
  </React.StrictMode>,
)
