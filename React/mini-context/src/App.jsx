import Profile from './component/Profile'
import Login from "./component/Login"
import UserContextProvider from "./context/UserContextProvider"

function App() {
  return (
    <UserContextProvider>
      <h1>React Mini Context</h1>
      <Login/>
      <Profile/> 
    </UserContextProvider>
  )
}

export default App
