import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home'
import { loader } from './components/Barang/BarangContainer'
import Login from './pages/Login'
import Register from './pages/Register'
import Root from './pages/Root'
import UserHome from './pages/Backend/UserHome'
import BackendRoot from "./pages/Backend/BackendRoot"
import Profile from './pages/Backend/Profile'
import History from './pages/Backend/History'
import Cart from './pages/Backend/Cart'
import Notification from './pages/Backend/Notification'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' >
      <Route element={<Root/>}>
        <Route index element={<Home/>} loader={loader}/>
        <Route path='login' element ={<Login/>}/>
        <Route path='register' element ={<Register/>}/>
      </Route>
      <Route element = {<BackendRoot/>}>
        <Route path='home' element ={<UserHome/>} loader={loader}/>
        <Route path='profile' element ={<Profile/>} />
        <Route path='history' element ={<History/>} />
        <Route path='cart' element ={<Cart/>} />
        <Route path='notification' element ={<Notification/>} />
      </Route>
    </Route>
      
  )
)

function App(){
  return <RouterProvider router={router}/>
}

export default App
