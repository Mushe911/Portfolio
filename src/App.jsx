import React from 'react'
import { Routes, Route  } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Nav from './components/Nav'


const App = () => {
    return (
      <div>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/projects" element={<Projects />}/>
          <Route exact path="contact" element={<Contact />}/>
        </Routes>
      </div>
    )


}

export default App;