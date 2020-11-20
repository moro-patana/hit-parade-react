import React, { useContext } from "react"
import { Contexts } from "./useContext"
import Header from "./components/Header"
import SongItem from "./components/songItem"
import {Switch, Route} from "react-router-dom"
import Styles from "./components/styles"
import AddSong from "./components/addSong"
function App() {
    const {songs, setSongs} = useContext(Contexts)
    console.log(songs);
    return (
        <div>
        <Header/>
        <Switch>
            <Route exact path="/">
              <SongItem/>
            </Route>
            <Route path="/styles">
                <Styles/>
            </Route>
            <Route path="/addsong">
            <h3>😃Add a new song</h3>
                <AddSong/>
            </Route>
        </Switch>
        </div>
    )
}
export default App;