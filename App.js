import React, { useContext } from "react"
import { Contexts } from "./useContext"
import Header from "./components/Header"
import SongItem from "./components/songItem"
import {Switch, Route} from "react-router-dom"
import Styles from "./components/styles"
import AddSong from "./components/addSong"
import Cart from "./components/cart"
import SongStyleItem from "./components/songStyleItem"
function App() {
    const { songs } = useContext(Contexts)
    return (
        <div>
        <Header/>
        <Switch>
            <Route exact path="/">
            {songs.map(song => ( <SongItem key={song.id} song={song}/> ))}
            </Route>
            <Route exact path="/styles">
                <Styles/>
            </Route>
            <Route path="/styles/:cartStyle">
                <SongStyleItem/>
            </Route>
            <Route path="/addsong">
            <h4>😃Add a new song</h4>
                <AddSong/>
            </Route>
            <Route exact path="/cart">
                <Cart/>
            </Route>
            <Route path="/cart/:cartId"></Route>
        </Switch>
        </div>
    )
}
export default App;