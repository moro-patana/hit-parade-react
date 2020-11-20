import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Contexts } from "../useContext"

function Header() {
    const {songs} = useContext(Contexts)
    return (
      <header>
          <Link to="/">
             <i class="ri-fire-fill"></i> 
             <h2>Popular Songs</h2>
          </Link>
          <Link to="/styles">
              <i class="ri-heart-line"></i>
              <h2>Styles</h2>
          </Link>
          <Link to="/addsong">
              <i class="ri-emotion-line"></i> 
              <h2>Add</h2>
          </Link>
          <Link to="/cart">
              <i class="ri-shopping-cart-2-line"></i>
              <h2>Cart</h2>
          </Link>
      </header>
    )
}
export default Header;