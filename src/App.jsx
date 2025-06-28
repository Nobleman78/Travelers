import Header from "./components/Layout/Header/Header"
import Navbar from "./components/Layout/Navbar/Navbar"
import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"



function App() {
  return (
    <div className="">
      <Header />
      <Navbar />
     
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>


    </div>
  )
}

export default App
