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
                    <div>
                        <h3>{song.title}</h3>
                        <span>{song.artist}</span>
                    </div>
                    <button>upvote</button>
                    <button>downvote</button>
                </div>
        
        ))}
        </>
    )
}
export default App;