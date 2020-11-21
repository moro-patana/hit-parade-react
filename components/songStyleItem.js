import React, { useContext } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import { Contexts } from "../useContext"
function SongStyleItem() {
    const {songs} = useContext(Contexts)
    console.log(songs);
    const { cartStyle } = useParams()
    const filterSongs = songs.filter(song => song.style === cartStyle)
    console.log(filterSongs);

    return (
      <div>
          <p className="song-style">
              🎧{cartStyle}
          </p>
         {filterSongs.map(song => (
             <div key={song.id} className="filter-style" >
                 <Link to={`/lyrics/${song.id}`}>
                     <h3>{song.title}</h3>
                     <span>{song.artist}</span>
                 </Link>
             </div>
         ))}
      </div>
    )
}
export default SongStyleItem;