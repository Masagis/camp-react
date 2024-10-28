import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom'

import Homes from './Home'
import Abouts from './About'
import Contacts from './Contact'

function Blogs() {
  return (
    <div>
      <h2>Blogs</h2>

      <ul>
        <li>
          {/* <Link to='/'>Home</Link> */}
          <a href="/">Judul 1</a>
        </li>
        <li>
          {/* <Link to='/about'>About</Link> */}
          <a href="/about">Judul 2</a>
        </li>
        <li>
          {/* <Link to='/contact'>Contact</Link> */}
          <a href="/contact">Judul 3</a>
        </li>
      </ul>
      <hr />

      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </div>
  )
}

export default Blogs
