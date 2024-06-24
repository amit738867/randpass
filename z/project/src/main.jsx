import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About/About.jsx'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children : [
      {
        path : "",
        element: <Home />
      },
      {
        path : "About",
        element: <About />
      },
      {
        path : "Contact",
        element: <Contact />
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
