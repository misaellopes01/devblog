import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'

import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Gallery } from './pages/Gallery/Gallery.jsx'
import { Home } from './pages/Home/Home.jsx'
import { Profile } from './pages/Profile/Profile.jsx'
import { About } from './pages/About/About.jsx'
import { PostDetails } from './pages/PostDetails/PostDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },

      { 
        path: "/gallery",
        element: <Gallery/>
      },

      {
        path: "/about",
        element: <About/>
      },

      {
        path: "/profile",
        element: <Profile/>
      },

      {
        path: "/:id",
        element: <PostDetails/>
      }

    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>,
)
