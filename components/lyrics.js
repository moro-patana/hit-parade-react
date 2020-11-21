import React, { useContext } from "react"
import { Contexts } from "../useContext"
import { useParams } from "react-router-dom"
function Lyrics() {
    const { songs } = useContext(Contexts)
    const { songId } = useParams()
    const filterSongs = songs.filter(song => song.id === Number(songId))
    console.log(filterSongs);

    return (
        <div className="lyrics-page">
            <h3>Lyrics</h3>
            {filterSongs.map(song => (<p key={song.id} className="lyrics-paragraph">{song.lyrics}</p>))}
        </div>
    )
}
export default Lyrics;