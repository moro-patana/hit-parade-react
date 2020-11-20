import React, { useContext } from "react"
import { Contexts } from "./useContext"
import Header from "./components/Header"
import SongItem from "./components/songItem"
import {Switch, Route} from "react-router-dom"
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
        </Switch>
        </div>
    )
}
export default App;