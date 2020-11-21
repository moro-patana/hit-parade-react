import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Contexts } from "../useContext"

function Header() {
    const {songs} = useContext(Contexts)
    return (
      <header>
          <Link to="/">
              <p className="menu">🔥Popular songs</p>
          </Link>

          <Link to="/styles">
             <p className="menu">💖Styles</p>
          </Link>
           <Link to="/addsong">
              <p className="menu">😀Add</p>
          </Link>
          <Link to="/cart">
              <p className="menu">🛒Cart</p>
          </Link>
      </header>
    )
}
export default Header;