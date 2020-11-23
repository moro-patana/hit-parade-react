import React, { useEffect, useState } from "react"
import SongsData from "./songsData.json"
const Contexts = React.createContext()
function ContextProvider(props) {
    const [songs, setSongs] = useState([])
    const [cartItem, setCartItem] = useState([])

    function handleSongs() {
    const lsSongs = JSON.parse(localStorage.getItem("songs"));
     if(lsSongs) {
         setSongs(lsSongs)
     } else {
         setSongs(SongsData)
     }
    }
    useEffect(() => {
        setSongs(SongsData)
        handleSongs()
        initCartItem()
    }, [])
    function toggleFavorite(id) {
        const favoritedSongs = songs.map(song => {
            if (song.id === Number(id)) {
                console.log(song.isFavorite);
                return {
                    ...song,
                    isFavorite: !song.isFavorite
                }
            }
            return { ...song };
        })
        setSongs(favoritedSongs)
    }

    function toggleUpvote(id) {
        const upvoteUpdate = songs.map(song => {
            if (song.id === Number(id)) {
                console.log(song.upvote);
                return {
                    ...song,
                    upvote: song.upvote + 1
                }
            }
            return { ...song };
        })
        setSongs(upvoteUpdate)
    }
    function toggleDownvote(id) {
        const downVoteUpdate = songs.map(song => {
            if (song.id === Number(id)) {
                console.log(song.downvote);
                return {
                    ...song,
                    downvote: song.downvote + 1
                }
            }
            return { ...song };
        })
        setSongs(downVoteUpdate)
    }
    function addToCart(song) {
        console.log(song);
        setCartItem(prevItems => [...prevItems, song])
        console.log(cartItem);
    }
    function deleteItem(songId) {
        setCartItem(prevItems => prevItems.filter(cartItem => cartItem.id !== songId))
    }
    function emptyCart() {
        setCartItem([])
    }

    function handleSubmit(e) {
        e.preventDefault();
        const input = e.target
        const newSong = {
            title: input.title.value,
            artist: input.artist.value,
            price: Number(input.price.value),
            style: input.style.value,
            lyrics: input.lyrics.value,
            isfavorite: false,
            upvote: 0,
            downvote: 0,
            id: Date.now()
        }
        songs.push(newSong)
        setSongs([...songs])
        e.target.reset()
    }

    function initCartItem() {
        const lscartItem = JSON.parse(localStorage.getItem("cartItem"))
        if(lscartItem) {
            setCartItem(lscartItem)
        }
    }

    useEffect(() => {
        localStorage.setItem("songs", JSON.stringify(songs))
    }, [songs])

    useEffect(() => {
            localStorage.setItem("cartItem", JSON.stringify(cartItem))
    }, [cartItem])

    return (
        <Contexts.Provider 
        value={{ 
            songs,
            setSongs, 
            toggleUpvote, 
            toggleDownvote, 
            toggleFavorite, 
            addToCart, 
            deleteItem, 
            cartItem, 
            emptyCart,
            handleSubmit
            }}>
            {props.children}
        </Contexts.Provider>
    )
}
export { ContextProvider, Contexts }