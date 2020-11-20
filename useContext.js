import React, { useEffect, useState } from "react"
import SongsData from "./songsData.json"
const Contexts = React.createContext()
function ContextProvider(props) {
    const [songs, setSongs] = useState([])
 
    useEffect(() => {
        setSongs(SongsData)
    }, [])
    function toggleUpvote(id) {
        const upvoteUpdate = songs.map(song => {
            if(song.id === Number(id)) {
              console.log(song.upvote);
              return {
                  ...song,
                  upvote: song.upvote + 1
              }
            } 
            return {...song};
        })
        setSongs(upvoteUpdate)
     }
     function toggleDownvote(id) {
        const downVoteUpdate = songs.map(song => {
            if(song.id === Number(id)) {
              console.log(song.downvote);
              return {
                  ...song,
                  downvote: song.downvote + 1
              }
            } 
            return {...song};
        })
        setSongs(downVoteUpdate)
     }
 
    return (
      <Contexts.Provider value={{songs, toggleUpvote, toggleDownvote}}>
          {props.children}
      </Contexts.Provider>
    )
}
export {ContextProvider, Contexts}