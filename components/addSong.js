import React, { useContext, useState } from "react"
import { Contexts } from "../useContext";
function AddSong() {
    const { handleSubmit } = useContext(Contexts)
    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [price, setPrice] = useState(0)
    return (
        <div className="add-new-song">
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="title" 
                placeholder="Title"
                value={title}
                onChange={(event) => setTitle(event.target.value) }
                 />
                <input 
                type="text" 
                name="artist" 
                placeholder="Artist"
                value={artist}
                onChange={(event) => setArtist(event.target.value) } 
                />
                <input 
                type="number" 
                name="price" 
                placeholder="Price" 
                value={price}
                onChange={(event) => setPrice(event.target.value) }
                />
                <select name="style" id="pet-select">
                    <option value="">Styles</option>
                    <option value="slow">Slow</option>
                    <option value="salegy">Salegy</option>
                    <option value="reggae">Reggae</option>
                    <option value="kawitry">Kawitry</option>
                    <option value="country">Country</option>
                    <option value="rock">Rock</option>
                    <option value="rap">Rap</option>
                </select>
                <label>Lyrics</label>
                <textarea name="lyrics"></textarea>
                <button type="submit" className="add">Add</button>
            </form>
        </div>

    )
}
export default AddSong;