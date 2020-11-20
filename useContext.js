import React, { useEffect, useState } from "react"
import SongsData from "./songsData.json"
const Contexts = React.createContext()
function ContextProvider(props) {
    const [songs, setSongs] = useState([])
    useEffect(() => {
        setSongs(SongsData)
    })
    return (
      <Contexts.Provider value={{songs}}>
          {props.children}
      </Contexts.Provider>
    )
}
export {ContextProvider, Contexts}