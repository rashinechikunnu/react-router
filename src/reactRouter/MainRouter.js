import React from 'react'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Services from './pages/Services'
import PageNotFound from './pages/PageNotFound'
import {Routes,Route,Link} from 'react-router-dom'

const MainRouter = () => {
  return (
    <div>
      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="services" element={<Services />} />
      {/* undefind name type  */}
      <Route path='*' element={< PageNotFound/>}/>
    </Routes>

    <ul>
      <li><Link to='/'>HOME</Link></li>
      <li><Link to='about'>ABOUT</Link></li>
      <li><Link to='contact'>CONTACT</Link></li>
      <li><Link to='services'>SERVICES</Link></li>
    </ul>

    </div>
  )
}

export default MainRouter
