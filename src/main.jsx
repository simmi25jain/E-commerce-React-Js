import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import Router from './Router'
import { Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <Router/>
)
