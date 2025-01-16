import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
  return (
    <div className='main'>
      <div className="content">
        <h1>Welcome to React Authentication using Json Web Token</h1>
        <p>Check Source code on Github Profile Link & Connet on LinkedIn Profile Link </p>

        <div className="links">
          <Link to="/login" className='link login'>Login</Link>
          <Link to="/signup" className='link signup'>Signup</Link>
        </div>
      </div>

    </div>
  )
}

export default Home