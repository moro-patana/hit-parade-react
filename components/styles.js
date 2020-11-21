import React, { useContext } from "react"
import { Contexts } from "../useContext"
function Styles() {
    const {songs} = useContext(Contexts)

    const song = songs.map(song => song.style)
    console.log(song);
    const songFilter = [...new Set(song)]
    console.log(songFilter);

     return (
      <div>
          <ul>
          {songFilter.map((song, index) => (
            <li key={index}>🎧{song}</li>
          ))}
          </ul>
      </div>
    )
}
export default Styles;