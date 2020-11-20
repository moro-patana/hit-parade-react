import React, { useContext } from "react"
import { Contexts } from "./useContext"
import Header from "./components/Header"
function App() {
    const {songs, setSongs} = useContext(Contexts)
    console.log(songs);
    return (
        <>
        <Header/>
        {songs.map(song => (
                <div className="song-list">
                    <i class="ri-heart-line"></i>
                    <div className="song">
                        <h3>{song.title}</h3>
                        <span>{song.artist}</span>
                    </div>
                    <div class="upvote">
                        <span>{song.upvote}</span>
                        <i class="ri-arrow-up-line"></i>
                    </div>
                    <div class="downvote">
                        <span>{song.downvote}</span>
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