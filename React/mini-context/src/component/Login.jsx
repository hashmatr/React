import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'
const Login = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const {setuser} = useContext(UserContext)

    const handleSubmit = (e) =>{
       e.preventDefault()
       setuser({username,password})
    }
  return (
    <div>
        <h1>Login</h1>
        <input type="text"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='username'/>
        {"  "}
        <input type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
         placeholder='password'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>

  )
}

export default Login