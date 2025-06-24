import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import Router from './Router'
import { Route } from 'react-router-dom'
import Main from "./ecommerce/Main"

createRoot(document.getElementById('root')).render(
  <Main/>
)
