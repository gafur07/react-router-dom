import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Posts from './components/Posts/Posts'

const App = () => {
  return (
    <>
    <Navbar />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />}/>
      <Route path='/posts' element={<Posts />}/>
    </Routes>
    </>
  )
}

export default App