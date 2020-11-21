import React, { useContext } from "react"
import { Contexts } from "../useContext"
function Styles() {
    const {songs} = useContext(Contexts)
    const filterStyles = songs.filter(song => song.style)
    console.log(filterStyles);
    return (
      <div>
          <ul>
          {filterStyles.map(song => (
            <li key={song.id}>🎧{song.style}</li>
          ))}
          </ul>
      </div>
    )
}
export default Styles;