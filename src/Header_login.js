import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'


function Header() {

  return (  
    <nav className="header">
    <Link to={"/"}>
      <img className="amazon-logo" 
      src='amazon_PNG11.png' 
      alt = "Amazon image" />
    </Link>


      </nav>
  )


}

export default Header
