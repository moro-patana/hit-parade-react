import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Contexts } from "../useContext"

function Header() {
    const {songs} = useContext(Contexts)
    return (
      <header>
          <Link to="/">
              <p>🔥Popular songs</p>
          </Link>

          <Link to="/styles">
             <p>💖Styles</p>
          </Link>
           <Link to="/addsong">
              <p>😀Add</p>
          </Link>
          <Link to="/cart">
              <p>🛒Cart</p>
          </Link>
      </header>
    )
}
export default Header;