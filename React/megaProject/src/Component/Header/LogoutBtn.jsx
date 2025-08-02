import React from 'react'
import authenticate from '../../appwrite/auth'
import { logout } from '../../../Store/authSlice'
import { useDispatch } from 'react-redux'

const LogoutBtn = () => {
    const Dispatch = useDispatch();
    const handlelogOut = () => {
        authenticate.logout().then(()=>{
            Dispatch(logout)
        })
    }

  return (
    <button onClick={handlelogOut} className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 roundd-full'>LogOut</button>
  )
}

export default LogoutBtn