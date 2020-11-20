import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Contexts } from "../useContext"

function Header() {
    const {songs} = useContext(Context)
    return (
      <header>
          <Link to="/">
             <h2><i class="ri-fire-fill"></i> Popular Songs</h2>
          </Link>
          <Link to="/style">
              <h2><i class="ri-heart-3-line"></i> Styles</h2>
          </Link>
          <Link to="/addsong">
              <h2><i class="ri-emotion-line"></i> Add</h2>
          </Link>
          <Link to="/cart">
              <h2><i class="ri-shopping-cart-2-line"></i> Cart</h2>
          </Link>
      </header>
    )
}
export default Header;