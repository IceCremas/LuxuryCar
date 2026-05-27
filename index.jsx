import React from "react"
import ReactDom from 'react-dom/client'
import './css/Header.css'
import './css/Items.css'
import App from './App'
import './css/BookingForm.css'
import { BrowserRouter } from "react-router-dom"

const root = ReactDom.createRoot(document.getElementById('root'))
   root.render(
    
        <BrowserRouter>
        <App />
        </BrowserRouter>
    
)