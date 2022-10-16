import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Service from './Pages/Service'
import Error from './Pages/Error'
import Navbar from './Header/Navbar'
import Footer from './Pages/Footer'
const App = () => {
  return (
    <React.Fragment>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />} exact/>
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />}/>
    <Route path='/service' element={<Service />}/>
    <Route path='*' exact={true} element={<Error />} />
    </Routes>
    <Footer/>
    </React.Fragment>
  )
}

export default App