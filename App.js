import React, { useContext } from "react"
import { Contexts } from "./useContext"
function App() {
    const {songs, setSongs} = useContext(Contexts)
    console.log(songs);
    return (
        <>
        <h2>Hello</h2>
        {songs.map(song => (
                <div className="song-list">
                    <i class="ri-heart-line"></i>
                    <div className="song">
                        <h3>{song.title}</h3>
                        <span>{song.artist}</span>
                    </div>
                    <div class="upvote">
                        <i class="ri-arrow-up-line"></i>
                    </div>
                    <div class="downvote">
                        <i class="ri-arrow-down-line"></i>
                    </div>
                    <div class="cart">
                        <i class="ri-shopping-cart-line"></i>
                    </div>
                    <div class="lyrics">
                        <i class="ri-more-line"></i>
                    </div>
                </div>
        
        ))}
        </>
    )
}
export default App;