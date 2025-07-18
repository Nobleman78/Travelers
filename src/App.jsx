

import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"
import Layout from './components/Layout/Layout'
import Hotel from './components/MainContents/Hotel'

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

        </Route>
        <Route path='/hotel' element={<Hotel />} />
      </Routes>


    </div>
  )
}

export default App
