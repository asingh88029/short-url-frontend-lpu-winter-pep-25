import ButtonScreen from "./screens/ButtonScreen"
import LinksScreen from "./screens/LinksScreen"
import SigninScreen from "./screens/SigninScreen"
import SignupScreen from "./screens/SignupScreen"
import StateScreen from "./screens/StateScreen"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SigninScreen/>}/>
          <Route path="/dev/button" element={<ButtonScreen/>}/>
          <Route path="/dashboard/links" element={<LinksScreen/>}/>
          <Route path="/auth/signin" element={<SigninScreen/>}/>
          <Route path="/auth/signup" element={<SignupScreen/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App