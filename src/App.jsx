

import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"
import Layout from './components/Layout/Layout'



function App() {
  return (
    <div className="">
      <Header />
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Add more pages here */}
        </Route>
      </Routes>


    </div>
  )
}

export default App
