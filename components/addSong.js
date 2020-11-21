import React from "react"
function AddSong() {
    return (
        <div className="add-new-song">
            <form>
                <input type="text" name="title" placeholder="Title"/>
                <input type="text" name="artist" placeholder="Artist"/>
                <input type="text" name="price" placeholder="Price"/>
                <select name="pets" id="pet-select">
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
                <textarea></textarea>
                <button className="add">Add</button>
            </form>
        </div>

    )
}
export default AddSong;