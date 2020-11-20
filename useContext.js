import React, { useEffect, useState } from "react"
import SongsData from "./songsData.json"
const Contexts = React.createContext()
function ContextProvider(props) {
    const [songs, setSongs] = useState([])
    const [cartItem, setCartItem] = useState([])
 
    useEffect(() => {
        setSongs(SongsData)
    }, [])
    function toggleFavorite(id) {
        const favoritedSongs = songs.map(song => {
            if(song.id === Number(id)) {
              console.log(song.isFavorite);
              return {
                  ...song,
                  isFavorite: !song.isFavorite
              }
            } 
            return {...song};
        })
        setSongs(favoritedSongs)
     }
 
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
 function addToCart(song) {
     setCartItem(prevItems => [...prevItems, song])
 }
 function deleteItem(songId) {
    setCartItem(prevItems => prevItems.filter(cartItem => cartItem.id !== songId))}

    return (
      <Contexts.Provider value={{songs, toggleUpvote, toggleDownvote, toggleFavorite, addToCart, deleteItem, cartItem}}>
          {props.children}
      </Contexts.Provider>
    )
}
export {ContextProvider, Contexts}