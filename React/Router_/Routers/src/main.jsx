import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import { Router } from 'react-router-dom'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './Components/about/About.jsx'
import Home from './Components/Home/home.jsx'
import Contact from './Contact/contact.jsx'
import Github from './Components/Github/github.jsx'
const router = createBrowserRouter([
{

    path:'/',
    element:<Layout/>,
    children:[{
      path: "",
      element: <Home/>
    },
    {
      path:"about",
      element: <About/>
    },
    {
      path:"contact",
      element:<Contact/>
    },
    {path: "Github",
      element:<Github/>
    }
]}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
