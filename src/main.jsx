import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ContactProvider } from './contextApi/Contact.Context'
import './globalStyles.css'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContactProvider>
      <App />
    </ContactProvider>
  </React.StrictMode>
)
