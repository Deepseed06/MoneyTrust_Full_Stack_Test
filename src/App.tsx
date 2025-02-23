import { Route, Routes } from "react-router-dom"
import Logo from "./pages/header/Logo"
import Dashboard from "./pages/dashboard/Dashboard"
import Register from "./pages/auth/register/Register"
import CustomerServiceBtn from "./components/CustomerServiceBtn"
import SignIn from "./pages/auth/sign-in/SignIn"
import Welcome from "./pages/welcome/Welcome"
import PasswordReset from "./pages/auth/password-reset/PasswordReset"
import PasswordVerify from "./pages/auth/password-reset/PasswordVerify"
const App = () => {

  
  return (
    <>
      <Logo/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/auth/sign-in" element={<SignIn/>}></Route>
        <Route path="/auth/password-reset" element={<PasswordReset/>}></Route>
        <Route path="/auth/password-verify" element={<PasswordVerify/>}></Route>
        <Route path="/welcome" element={<Welcome/>}></Route>
      </Routes>

     <CustomerServiceBtn/>
      
    </>
  )
}

export default App
