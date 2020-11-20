import React, { useContext, useState} from "react"
import { Contexts } from "../useContext"
function SongItem(song) {
    const {songs, toggleUpvote, toggleDownvote, toggleFavorite} = useContext(Contexts)
    function heartIcon() {
        if(song.isFavorite) {
            return (<i className="ri-heart-fill" onClick={() => toggleFavorite(song.id)}></i>)
        } else {
            return (<i onClick={() => toggleFavorite(song.id)} className="ri-heart-line"></i>)
        }
        
    }

  

    return (
        <div>
            {songs.map(song => (
                <div className="song-list" key={song.id}>
                    {/* <i className="ri-heart-line" ></i> */}
                    {heartIcon()}
                    <div className="song">
                        <h3>{song.title}</h3>
                        <span>{song.artist}</span>
                    </div>
                    <div className="upvote">
                        <span>{song.upvote}</span>
                        <i className="ri-arrow-up-line" onClick={() => toggleUpvote(song.id)}></i>
                    </div>
                    <div className="downvote">
                        <span>{song.downvote}</span>
                        <i className="ri-arrow-down-line" onClick={() => toggleDownvote(song.id)}></i>
                    </div>
                    <div className="cart">
                        <i className="ri-shopping-cart-line"></i>
                    </div>
                    <div className="lyrics">
                        <i className="ri-more-line"></i>
                    </div>
                </div>
        
        ))}
    
        </div>
    )
}
export default SongItem;