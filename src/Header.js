import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import SearchIcon from "@mui/icons-material/Search"
import { ShoppingCart } from '@mui/icons-material'

function Header() {
  return (  

    <nav className="header">
    {/*Logo on the left*/}
    <Link to={"/"}>
      <img className="amazon-logo" 
      src='amazon_PNG11.png' 
      alt = "Amazon image" />
    </Link>

    {/*Search bar */}
    <div className="header_search">
    <input type="text" className="header_searchInput" />
    <SearchIcon className="header_searchIcon" />
    </div>

  {/*3links */}
  <div className='header_nav'>
   <Link to={"/about"} className='header_link'>
   <div className='header_options'>
   <span className='header_optionsLineOne'>Hello</span>
   <span className='header_optionsLineTwo'>Sign-in</span>
   </div>
   </Link>

   <Link to={"/users"} className='header_link'>
   <div className='header_options'>
   <span className='header_optionsLineOne'>Returns</span>
   <span className='header_optionsLineTwo'> & Orders</span>
   </div>
   </Link>

   <Link to={"/login"} className='header_link' >
   <div className='header_options'>
   <span className='header_optionsLineOne'>Your</span>
   <span className='header_optionsLineTwo'>Prime</span>
   </div>
   </Link>
   </div>


  {/*basket icon */}

  <Link to={"/checkout"} className='header_link'>
    <div className='header_optionBasket'>
    {/*Basket icon */}
    <ShoppingCart className='shopping_cartIcon'/>
     {/*Count of basket items */}
     <span className='header_optionLineTwo header_basketCount'>0</span>
     </div>
  </Link>
    

      </nav>
  )


}

export default Header
