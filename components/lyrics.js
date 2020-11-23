import React, { useContext } from "react"
import { Contexts } from "../useContext"
import { useParams } from "react-router-dom"
function Lyrics() {
    const { songs } = useContext(Contexts)
    const { songId } = useParams()
    const filterSongs = songs.filter(song => song.id === Number(songId))
    console.log(filterSongs);

    return (
        <>
        <h2>🎶 Lyrics</h2>
        <div className="lyrics-page">
            {filterSongs.map(song => (
            <div key={song.id} >
                <h3>{song.title}</h3>
                <p className="lyrics-paragraph">{song.lyrics}</p>
                <small>Artist: {song.artist}</small>
            </div>
            ))}
        </div>
        </>
    )
}
export default Lyrics;