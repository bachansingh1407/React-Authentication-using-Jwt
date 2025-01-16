import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li> <button>Logout</button></li>
      </ul>
    </nav>
  )
}

export default Navbar