// import Counters from './Counters'
import React from 'react'
// import CountersApp from './CounterApp'
import Users from './pages/User'
// eslint-disable-next-line import/no-extraneous-dependencies
// import { Routes, Route, Link } from 'react-router-dom'

// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Blogs from './pages/Blogs'
// import UserDetail from './pages/UserDetail'

function App() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="App">
      {/* <CountersApp nme="camp" /> */}
      <Users/>

      {/* <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/blogs'>Contact</Link>
          </li>
        </ul>
        <hr />
      </nav> */}
{/* 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/user/:userId" element={<UserDetail />} />
      </Routes> */}
      
    </div>
  )
}

export default App
