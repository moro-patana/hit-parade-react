import React, { useContext } from "react"
import { Contexts } from "../useContext"
import { Link } from "react-router-dom"
function Styles() {
    const {songs} = useContext(Contexts)

    const song = songs.map(song => song.style)
    const songFilter = [...new Set(song)]

     return (
      <div className="style">
          {songFilter.map((song, index) => (
            <Link key={index} to={`/styles/${song}`}>🎧{song}</Link>
          ))}
      </div>
    )
}
export default Styles;