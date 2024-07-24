import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Navbar from './components/basics/Navbar.jsx'
import routes from './routes.jsx';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Navbar />
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
