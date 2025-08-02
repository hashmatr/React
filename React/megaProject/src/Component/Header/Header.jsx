import React from 'react'
import { Logo,Container,LogoutBtn }from '..index/'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Header = () => {
const authstatus = useSelector((state)=>state.auth.status)
const Navigate = useNavigate()
const navitems  = [
  {
    name: 'Home',
    slug:'/',
    active:true
  },
    {
    name: 'Sign up',
    slug:'/Signup',
    active:!authstatus
  },
    { 
    name: 'Login',
    slug:'/login',
    active:!authstatus
  },
    {
    name: 'All posts',
    slug:'/all-posts',
    active:authstatus
  },
    {
    name: 'Add post',
    slug:'/add-post',
    active:authstatus
  },
]
  return (
      <header className='py-3 shadow bg-grey-500 '>
        <Container>
          <nav className='flex'>
            <div className='mr-4'>
              <Link to='/'/>
              <Logo width='70px'/>
            </div>
            <ul className='flex ml-auto'>{
              navitems.map((items)=>
                items.active?(<li  key={items.name}>
              <button className='inline-block px-2 py-2 duration-200 hover:bg-blue-100 
               rounded-all' onClick={()=>Navigate(items.slug)}>{items.name}</button></li>):null 
              )}
              {authstatus && (
                <li><LogoutBtn/></li>
              )}
              </ul>
          </nav>
        </Container>
      </header>
  )
}

export default Header