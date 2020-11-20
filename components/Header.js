import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Contexts } from "../useContext"

function Header() {
    const {songs} = useContext(Contexts)
    return (
      <header>
          <Link to="/">
              <h2>🔥Popular songs</h2>
          </Link>

          <Link to="/styles">
             <h2>💖Styles</h2>
          </Link>
           <Link to="/addsong">
              <h2>😀Add</h2>
          </Link>
          <Link to="/cart">
              <h2>🛒Cart</h2>
          </Link>
      </header>
    )
}
export default Header;