import React, { useContext } from "react"
import { Contexts } from "../useContext"
import { useParams } from "react-router-dom"
function Lyrics() {
    const { songs } = useContext(Contexts)
    const { songId } = useParams()
    const song = songs.find(song => song.id === Number(songId))

    return (
        <>
        <h2>{song?.title}: {song?.artist}</h2>
        <div className="lyrics-page">
            <div key={song?.id} >
                <h3>🎶 Lyrics</h3>
                <div className="lyrics-paragraph" dangerouslySetInnerHTML={{
                    __html: song?.lyrics
                }}></div>
            </div>
        </div>
        </>
    )
}
export default Lyrics;