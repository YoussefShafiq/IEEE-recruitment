import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import { Children } from 'react'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Form from './pages/Form/Form'

function App() {

  let routers = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'login', element: <Login /> },
        { path: 'form', element: <Form /> },
      ]
    }
  ])

  return <>
    <RouterProvider router={routers}></RouterProvider>
  </>
}

export default App
