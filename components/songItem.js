import React, { useContext, useState } from "react"
import { Contexts } from "../useContext"
import { Link } from "react-router-dom"
import moreIcon from "../img/more.svg"

function SongItem({ song }) {
    const { toggleUpvote, toggleDownvote, toggleFavorite, cartItem,
        addToCart, deleteItem } = useContext(Contexts)
    function cartIcon() {
        console.log(cartItem);
        const alreadyInCart = cartItem.some(item => item.id === song.id)
        if (alreadyInCart) {
            return (<i onClick={() => deleteItem(song.id)} className="ri-shopping-cart-fill"></i>)
        } else {
            return (<i onClick={() => addToCart(song)} className="ri-shopping-cart-line"></i>)
        }
    }

    return (
        <div>
            <div className="song-list" >
                {song.isFavorite
                    ? <i className="ri-heart-fill" onClick={() => toggleFavorite(song.id)}></i>
                    : <i className="ri-heart-line" onClick={() => toggleFavorite(song.id)}></i>}
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
                    {cartIcon()}
                </div>
                <div className="lyrics">
                    <Link to={`/lyrics/${song.id}`}>
                        <img src={moreIcon} />
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default SongItem;