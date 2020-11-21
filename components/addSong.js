import React, { useContext } from "react"
import { Contexts } from "../useContext";
function AddSong() {
    const { handleSubmit } = useContext(Contexts)
    return (
        <div className="add-new-song">
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" />
                <input type="text" name="artist" placeholder="Artist" />
                <input type="number" name="price" placeholder="Price" />
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