import React, { useContext } from "react"
import { Contexts } from "./useContext"
function App() {
    const {songs, setSongs} = useContext(Contexts)
    console.log(songs);
    return (
        <>
        <h2>Hello</h2>
        {songs.map(song => (
                <div>
                    <i class="ri-heart-line"></i>
                    <div>
                        <h3>{song.title}</h3>
                        <span>{song.artist}</span>
                    </div>
                    <i class="ri-arrow-down-line"></i>
                    <i class="ri-arrow-up-line"></i>
                    <i class="ri-shopping-cart-fill"></i>
                </div>
        
        ))}
        </>
    )
}
export default App;