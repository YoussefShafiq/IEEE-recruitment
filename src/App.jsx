import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import { Children } from 'react'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Form from './pages/Form/Form'
import { CountdownProvider } from './contexts/CountdownContext'
import Contactus from './pages/Contactus/Contactus'
import Notfound from './components/Notfound/Notfound'

function App() {

  let routers = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'form', element: <Form /> },
        { path: 'contactus', element: <Contactus /> },
        { path: 'login', element: <Login /> },
        { path: '*', element: <Notfound /> },
      ]
    }
  ])

  return <>
    <CountdownProvider>
      <RouterProvider router={routers}></RouterProvider>
    </CountdownProvider>
  </>
}

export default App
