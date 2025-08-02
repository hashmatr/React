import { useEffect } from 'react'
import './main'
import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import authenticate from './appwrite/auth'
import { login,logout } from '../Store/authSlice'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
function App() {

  const [loading,setLoading] = useState(true)
  const Dispatch = useDispatch()
   useEffect(()=>{
      authenticate.getCurrentUser()
      .then((userData)=>{
        if(userData){
          Dispatch(login({userData}))
        }
        else{
          Dispatch(logout())
        }
      })
      .finally(setLoading(false))
   },[])
 return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
      <Header/>
      {/* <main><Outlet/></main>? */}
      <Footer/>
      </div></div>
  ) : null

}
export default App
