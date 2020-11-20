import React, { useContext } from "react"
import { Contexts } from "./useContext"
import Header from "./components/Header"
import SongItem from "./components/songItem"
import {Switch, Route} from "react-router-dom"
import Styles from "./components/styles"
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
        </Switch>
        </div>
    )
}
export default App;